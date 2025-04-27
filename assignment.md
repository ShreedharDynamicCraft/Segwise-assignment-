Frontend Engineer Assignment – Segwise
Heyyy! Thank you for applying to Segwise. We are as excited as you to get you onboard! 🥳
First of all, congratulations on making it to this stage! Give yourself a pat on the back. We had to go through thousands of profiles to handpick you, so well done! This is the second step in our process, where we would like to assess your frontend skills, problem-solving ability, and creativity. This is a take-home assignment, so please read through the details carefully, especially the requirements. If you follow all the steps correctly and understand the requirements, you’re already halfway there!
About Segwise & Expectations
Segwise is a data-first company that provides observability for marketing teams, and a second product that helps creative teams get insights out of their data. Our work revolves around numbers, analytics data, and lots of charts. As a frontend developer, your responsibility will be to design and build our dashboards to present this data in the most user-friendly, efficient, and visually appealing way. This means:
Writing clean, maintainable, and well-documented code.
Keeping up with the latest developments in frontend technologies.
Structuring projects efficiently for scalability and ease of maintenance.
Understanding UI/UX principles and implementing them effectively.
Achieving this requires a deep understanding of JS, CSS, and frontend frameworks, as well as a focus on performance and usability. This assignment is designed to simulate real-world tasks and assess your ability to meet these standards.
Additionally, being part of a startup means working in a fast-paced environment and occasionally giving 200%. For this reason, we have set a strict 48-hour deadline for this assignment. This helps us evaluate your ability to work under constraints while maintaining quality.

Assignment Overview
This task will evaluate your skills in React and CSS, focusing on your ability to translate a Figma design into a fully functional UI while ensuring interactive functionality.
Task Details
You will receive a Figma design file that contains a set of filters that need to be applied to a mock dataset. Your goal is to create a pixel-perfect implementation of the design while ensuring all filtering functionality works as expected. Please also make a table which shows all the columns and on which filters will be applied. This will test two core skills:
Your ability to implement a high-quality UI using CSS.
Your proficiency in React for handling interactions and data flow.
Additional Features
Apart from the filters, you also need to display the mock data in a table. This table should support:
Searching through the data.
Sorting by columns.
Unlike the filters, the table does not have a predefined design in Figma. You will need to design and implement it yourself while maintaining consistency with the overall UI. This will test your ability to build UI components from scratch while following best design practices.
Interactive Preview Feature
In addition to the table, we would like you to implement a small interactive feature:
When a user clicks on the first cell of any row, a small preview of that row’s data should open in the bottom-right corner of the screen.
This preview should be similar to how chat boxes work on platforms like LinkedIn.
As an optional enhancement (bonus feature), clicking on this preview should expand it into a full modal displaying the complete row data.
Reference Videos
For a better understanding of how this feature should work, refer to these videos:
Small preview box: YouTube Link
Full flow demonstration (relevant section around 12:00): YouTube Link
Important Links
Mock Data - https://drive.google.com/file/d/1avhPq79dJm4cw_NuaxES7xXhioWO0P5g/view?usp=sharing
Feel free to use AI to generate more data to test scalability.
Figma Design - https://www.figma.com/design/nRg3rghUlETyLkr4X9mN5L/fIlters?node-id=0-1&t=N5G7QMGXTahjx58P-1

Implementation Guidelines
Use React or Next.js as the framework.
You are free to use any libraries that help you efficiently meet the requirements.
The preview modal content is flexible—you can analyze the mock data and decide how best to present it.
Deploy your solution on Vercel or Netlify so we can review the live demo.
Please use Typescript

Mock Data Details and Requirements
You will be working with the following dataset:
creative_id – Unique identifier for the creative.
creative_name – Name of the creative asset.
tags – Various attributes describing the creative (e.g., concept, audio type).
country – Country where the ad is being shown.
ad_network – The advertising network (e.g., Meta, Google Ads).
os – Operating system targeted by the ad (e.g., Android, iOS, unknown).
campaign – Name of the ad campaign.
ad_group – The ad group within the campaign.
ipm – Installs per thousand impressions.
ctr – Click-through rate (percentage of users who clicked on the ad).
spend – Amount spent on the ad campaign.
impressions – Number of times the ad was displayed.
clicks – Number of times users clicked on the ad.
cpm – Cost per thousand impressions.
cost_per_click – Cost incurred per user click.
cost_per_install – Cost incurred per install.
installs – Number of app installs generated from the ad.
We need you to implement 3 filters as also seen in Figma
Dimension Filter -  Any column that is not either a metric or tags is a dimension. For our data set that would be creative_id, creative_name, country, ad_network, os, campaign, ad_group
Tag Filter -  Tag filters are filters that will be applied on the tag column. Please note that in the data, tags are given in the format of category:value. 
We wanna apply filters on the category. For example for `End card elements - Objects:rocks` End card elements is the category and rocks is the value. Values for this tag category can also be wand, boots, etc. We want the tags section in the filters to have all possible categories and once we select a category we can choose to see which value we want.
Metric Filter - For metric filters, we want the operator to be numeric, greater than, equal to or less than. Metric columns are ipm, ctr, spend, impressions, clicks, cpm, cost_per_click, cost_per_install, installs.
Please note that you should only be able to add one filter of a particular type. For example if you add a metric filter of installs > 100 you can't add another metric filter of installs < 10.


Evaluation Criteria
Your submission will be assessed based on:
✅ Pixel-perfect implementation of the Figma design. 
✅ Functionality (filters, search, sorting, and interactive preview must work as expected). 
✅ Code quality (clean, readable, and well-structured React + CSS implementation). 
✅ UI/UX creativity (table design and expanded preview modal).

Bonus Points
Implementing pagination in the table.
Enhancing the preview modal with expanded full-screen functionality.

A Note on use of AI
We welcome the use of AI to accelerate our productivity, so please don’t hesitate to use it. However, we discourage getting the entire assignment written by AI.

Submission Instructions
Please submit the following via email:
Deployed app link (Vercel or Netlify).
GitHub repository link (make sure it’s private).
Add mihir@segwise.ai and daga@segwise.ai as collaborators with write access.
📢 Important: Write access is required to ensure smooth repository checkout, but don’t worry—we won’t make any changes! 😊
