'use client';

import { useState } from 'react';
import { Filter, FilterType } from '@/types/filters';
import { mockData, getDimensionColumns, getMetricColumns, extractTagCategories, extractTagValues } from '@/data/mockData';

interface FilterBarProps {
  filters: Filter[];
  setFilters: (filters: Filter[]) => void;
}

export default function FilterBar({ filters, setFilters }: FilterBarProps) {
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [activeFilterType, setActiveFilterType] = useState<FilterType | null>(null);
  const [selectedDimension, setSelectedDimension] = useState<string>('');
  const [selectedTagCategory, setSelectedTagCategory] = useState<string>('');
  const [selectedMetric, setSelectedMetric] = useState<string>('');
  const [metricOperator, setMetricOperator] = useState<'gt' | 'lt' | 'eq'>('gt');
  const [metricValue, setMetricValue] = useState<string>('');
  const [dimensionValue, setDimensionValue] = useState<string>('');
  const [tagValue, setTagValue] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');
  const [showValueSelector, setShowValueSelector] = useState(false);

  const dimensionColumns = getDimensionColumns();
  const metricColumns = getMetricColumns();
  const tagCategories = extractTagCategories(mockData);

  const toggleFilterMenu = () => {
    setShowFilterMenu(!showFilterMenu);
  };

  const selectFilterType = (type: FilterType) => {
    setActiveFilterType(type);
    // Reset selections when changing filter type
    setSelectedDimension('');
    setSelectedTagCategory('');
    setSelectedMetric('');
    setMetricValue('');
    setDimensionValue('');
    setTagValue('');
  };

  const handleAddFilter = () => {
    if (!activeFilterType) return;

    let newFilter: Filter | null = null;

    switch (activeFilterType) {
      case 'dimension':
        if (selectedDimension && dimensionValue) {
          newFilter = {
            id: `dimension-${Date.now()}`,
            type: 'dimension',
            column: selectedDimension,
            value: dimensionValue
          };
        }
        break;
      case 'tag':
        if (selectedTagCategory && tagValue) {
          newFilter = {
            id: `tag-${Date.now()}`,
            type: 'tag',
            category: selectedTagCategory,
            value: tagValue
          };
        }
        break;
      case 'metric':
        if (selectedMetric && metricValue && !isNaN(Number(metricValue))) {
          newFilter = {
            id: `metric-${Date.now()}`,
            type: 'metric',
            column: selectedMetric,
            operator: metricOperator,
            value: Number(metricValue)
          };
        }
        break;
    }

    if (newFilter) {
      // Check if a filter of this type already exists
      const existingFilterIndex = filters.findIndex(f => f.type === activeFilterType);
      
      if (existingFilterIndex >= 0) {
        // Replace the existing filter
        const newFilters = [...filters];
        newFilters[existingFilterIndex] = newFilter;
        setFilters(newFilters);
      } else {
        // Add a new filter
        setFilters([...filters, newFilter]);
      }

      // Reset the UI
      setActiveFilterType(null);
      setShowFilterMenu(false);
    }
  };

  const removeFilter = (id: string) => {
    setFilters(filters.filter(f => f.id !== id));
  };

  // Get unique values for the selected dimension
  const getDimensionValues = () => {
    if (!selectedDimension) return [];
    
    const values = new Set<string>();
    mockData.forEach(item => {
      const value = item[selectedDimension as keyof typeof item];
      if (typeof value === 'string') {
        values.add(value);
      }
    });
    
    return Array.from(values);
  };

  // Get tag values for the selected category
  const getTagValues = () => {
    if (!selectedTagCategory) return [];
    return extractTagValues(mockData, selectedTagCategory);
  };

  // Filter values based on search
  const filterValues = (values: string[]) => {
    if (!searchValue) return values;
    return values.filter(value => 
      value.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  // Get the appropriate list based on the active tab
  const getFilterList = () => {
    switch (activeFilterType) {
      case 'dimension':
        return filterValues(dimensionColumns);
      case 'tag':
        return filterValues(tagCategories);
      case 'metric':
        return filterValues(metricColumns);
      default:
        return filterValues(dimensionColumns); // Default to dimensions
    }
  };

  // Handle item selection based on filter type
  const handleItemSelect = (item: string) => {
    switch (activeFilterType) {
      case 'dimension':
        setSelectedDimension(item);
        break;
      case 'tag':
        setSelectedTagCategory(item);
        break;
      case 'metric':
        setSelectedMetric(item);
        break;
      default:
        // If no filter type is selected yet, set dimension and change to dimension type
        setSelectedDimension(item);
        setActiveFilterType('dimension');
    }
  };

  return (
    <div className="relative">
      <div 
        className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-md w-fit cursor-pointer"
        onClick={toggleFilterMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </svg>
        <span className="text-sm font-medium">Filters</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

      {/* Applied Filters */}
      {filters.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {filters.map(filter => (
            <div key={filter.id} className="flex items-center gap-2 bg-white border border-gray-200 rounded-md px-3 py-1.5 text-sm">
              {filter.type === 'dimension' && (
                <span>{filter.column}: {filter.value}</span>
              )}
              {filter.type === 'tag' && (
                <span>{filter.category}: {filter.value}</span>
              )}
              {filter.type === 'metric' && (
                <span>
                  {filter.column} 
                  {filter.operator === 'gt' ? '>' : filter.operator === 'lt' ? '<' : '='} 
                  {filter.value}
                </span>
              )}
              <button 
                onClick={() => removeFilter(filter.id)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Add Filter Button */}
      <button 
        className="mt-4 flex items-center gap-2 bg-lime-100 text-gray-700 px-4 py-2 rounded-md hover:bg-lime-200 transition-colors"
        onClick={() => setShowFilterMenu(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        <span className="text-sm font-medium">Add Filter</span>
      </button>

      {/* Filter Menu */}
      {showFilterMenu && (
        <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 border border-gray-200">
          {!showValueSelector ? (
            <>
              {/* Add Filter Header */}
              <div className="p-3 border-b border-gray-200">
                <div className="text-sm font-medium">Add Filter</div>
              </div>
              
              {/* Search Bar */}
              <div className="p-3 border-b border-gray-200">
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
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </div>
              </div>

              {/* Filter Types */}
              <div className="p-2">
                <div className="flex border-b border-gray-200">
                  <button 
                    className={`flex-1 py-2 text-sm font-medium ${activeFilterType === 'dimension' || activeFilterType === null ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => selectFilterType('dimension')}
                  >
                    Dimensions
                  </button>
                  <button 
                    className={`flex-1 py-2 text-sm font-medium ${activeFilterType === 'tag' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => selectFilterType('tag')}
                  >
                    Tags
                  </button>
                  <button 
                    className={`flex-1 py-2 text-sm font-medium ${activeFilterType === 'metric' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => selectFilterType('metric')}
                  >
                    Metrics
                  </button>
                </div>

                <div className="mt-2 max-h-60 overflow-y-auto">
                  {getFilterList().map(item => (
                    <div 
                      key={item} 
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        handleItemSelect(item);
                        setShowValueSelector(true);
                      }}
                    >
                      {item.replace(/_/g, ' ')}
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Value Selector View */}
              {activeFilterType === 'dimension' && (
                <div className="p-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Dimension</span>
                      <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">{selectedDimension.replace(/_/g, ' ')}</span>
                    </div>
                    <button 
                      onClick={() => {
                        setShowValueSelector(false);
                        setActiveFilterType(null);
                      }}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      ×
                    </button>
                  </div>

                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">is</label>
                    <select
                      className="w-full p-2 text-sm border border-gray-300 rounded-md"
                      value={dimensionValue}
                      onChange={(e) => setDimensionValue(e.target.value)}
                    >
                      <option value="">Select Value</option>
                      {getDimensionValues().map(value => (
                        <option key={value} value={value}>{value}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition-colors text-sm font-medium"
                    onClick={handleAddFilter}
                    disabled={!selectedDimension || !dimensionValue}
                  >
                    Apply
                  </button>
                </div>
              )}

              {/* Tag Filter */}
              {activeFilterType === 'tag' && (
                <div className="p-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Tag</span>
                      <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">{selectedTagCategory}</span>
                    </div>
                    <button 
                      onClick={() => {
                        setShowValueSelector(false);
                        setActiveFilterType(null);
                      }}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      ×
                    </button>
                  </div>

                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">is</label>
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
                        onChange={(e) => setSearchValue(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mb-3 max-h-40 overflow-y-auto">
                    <label className="flex items-center mb-2">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Select all</span>
                    </label>
                    {getTagValues().filter(value => 
                      !searchValue || value.toLowerCase().includes(searchValue.toLowerCase())
                    ).map(value => (
                      <label key={value} className="flex items-center mb-2">
                        <input 
                          type="checkbox" 
                          className="mr-2" 
                          checked={tagValue === value}
                          onChange={() => setTagValue(value)}
                        />
                        <span className="text-sm">{value}</span>
                      </label>
                    ))}
                  </div>

                  <button
                    className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition-colors text-sm font-medium"
                    onClick={handleAddFilter}
                    disabled={!selectedTagCategory || !tagValue}
                  >
                    Apply
                  </button>
                </div>
              )}

              {/* Metric Filter */}
              {activeFilterType === 'metric' && (
                <div className="p-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Metric</span>
                      <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">{selectedMetric.replace(/_/g, ' ')}</span>
                    </div>
                    <button 
                      onClick={() => {
                        setShowValueSelector(false);
                        setActiveFilterType(null);
                      }}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      ×
                    </button>
                  </div>

                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Operator</label>
                    <select
                      className="w-full p-2 text-sm border border-gray-300 rounded-md"
                      value={metricOperator}
                      onChange={(e) => setMetricOperator(e.target.value as 'gt' | 'lt' | 'eq')}
                    >
                      <option value="gt">Greater than</option>
                      <option value="lt">Less than</option>
                      <option value="eq">Equal to</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Value</label>
                    <input
                      type="number"
                      className="w-full p-2 text-sm border border-gray-300 rounded-md"
                      value={metricValue}
                      onChange={(e) => setMetricValue(e.target.value)}
                      placeholder="Enter a number"
                    />
                  </div>

                  <button
                    className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition-colors text-sm font-medium"
                    onClick={handleAddFilter}
                    disabled={!selectedMetric || !metricValue || isNaN(Number(metricValue))}
                  >
                    Apply
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}


        </div>
      )}
    </div>
  );
}