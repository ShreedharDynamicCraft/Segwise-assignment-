'use client';

import { useState } from 'react';
import { mockData, CreativeData } from '@/data/mockData';
import { Filter } from '@/types/filters';
import FilterBar from '@/components/filters/FilterBar';

export default function Home() {
  const [filters, setFilters] = useState<Filter[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [previewData, setPreviewData] = useState<CreativeData | null>(null);
  const [showFullModal, setShowFullModal] = useState(false);

  // Apply filters to the data
  const filteredData = mockData.filter(item => {
    // If no filters, return all data
    if (filters.length === 0) return true;

    return filters.every(filter => {
      switch (filter.type) {
        case 'dimension':
          return item[filter.column as keyof CreativeData] === filter.value;
        case 'tag':
          return item.tags.some(tag => 
            tag.startsWith(`${filter.category}:`) && 
            tag.includes(filter.value)
          );
        case 'metric':
          const itemValue = item[filter.column as keyof CreativeData] as number;
          switch (filter.operator) {
            case 'gt': return itemValue > filter.value;
            case 'lt': return itemValue < filter.value;
            case 'eq': return itemValue === filter.value;
            default: return true;
          }
        default:
          return true;
      }
    });
  });

  // Apply search query to filtered data
  const searchedData = searchQuery.trim() === '' 
    ? filteredData 
    : filteredData.filter(item => {
        const searchLower = searchQuery.toLowerCase();
        return Object.values(item).some(value => {
          if (typeof value === 'string') {
            return value.toLowerCase().includes(searchLower);
          }
          if (Array.isArray(value)) {
            return value.some(v => 
              typeof v === 'string' && v.toLowerCase().includes(searchLower)
            );
          }
          return String(value).toLowerCase().includes(searchLower);
        });
      });

  const handleRowPreview = (data: CreativeData) => {
    setPreviewData(data);
  };

  const handleExpandPreview = () => {
    setShowFullModal(true);
  };

  const handleCloseModal = () => {
    setShowFullModal(false);
  };

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-lime-300 flex items-center justify-center">
              <div className="w-6 h-6 bg-lime-400"></div>
            </div>
            <div>
              <h1 className="text-xl font-medium text-gray-700">Segwise</h1>
              <p className="text-sm text-gray-500">Front End Test</p>
            </div>
          </div>
        </header>

        <div className="border border-dashed border-gray-300 rounded-lg p-6 mb-8">
          <FilterBar filters={filters} setFilters={setFilters} />
        </div>

        {/* Search Bar */}
        <div className="mb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input
              type="search"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {Object.keys(mockData[0] || {}).map((key) => (
                  <th
                    key={key}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {key.replace(/_/g, ' ')}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {searchedData.map((item, index) => (
                <tr key={item.creative_id} className="hover:bg-gray-50">
                  {Object.entries(item).map(([key, value], cellIndex) => (
                    <td
                      key={`${item.creative_id}-${key}`}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      onClick={cellIndex === 0 ? () => handleRowPreview(item) : undefined}
                      style={cellIndex === 0 ? { cursor: 'pointer' } : {}}
                    >
                      {Array.isArray(value) 
                        ? value.join(', ')
                        : String(value)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Preview Component */}
        {previewData && (
          <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 z-10">
            <div className="p-3 bg-gray-100 flex justify-between items-center">
              <h3 className="font-medium text-sm">Creative Preview</h3>
              <div className="flex gap-2">
                <button 
                  onClick={handleExpandPreview}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Expand
                </button>
                <button 
                  onClick={() => setPreviewData(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-2">
                <span className="text-xs text-gray-500">ID:</span>
                <span className="ml-2 font-medium">{previewData.creative_id}</span>
              </div>
              <div className="mb-2">
                <span className="text-xs text-gray-500">Name:</span>
                <span className="ml-2">{previewData.creative_name}</span>
              </div>
              <div className="mb-2">
                <span className="text-xs text-gray-500">Campaign:</span>
                <span className="ml-2">{previewData.campaign}</span>
              </div>
              <div className="mb-2">
                <span className="text-xs text-gray-500">Network:</span>
                <span className="ml-2">{previewData.ad_network}</span>
              </div>
            </div>
          </div>
        )}

        {/* Full Modal */}
        {showFullModal && previewData && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
            <div className="bg-white rounded-lg w-full max-w-2xl max-h-[80vh] overflow-auto">
              <div className="p-4 bg-gray-100 flex justify-between items-center sticky top-0">
                <h2 className="font-medium">Creative Details</h2>
                <button 
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  ×
                </button>
              </div>
              <div className="p-6 grid grid-cols-2 gap-4">
                {Object.entries(previewData).map(([key, value]) => (
                  <div key={key} className="mb-4">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">
                      {key.replace(/_/g, ' ').toUpperCase()}
                    </h3>
                    <div>
                      {Array.isArray(value) 
                        ? value.map((tag, i) => (
                            <span key={i} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2">
                              {tag}
                            </span>
                          ))
                        : <span>{value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
