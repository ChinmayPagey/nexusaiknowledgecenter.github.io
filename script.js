document.addEventListener('DOMContentLoaded', function() {
   
    const tabs = document.querySelectorAll('.knowledge-center-nav .kc-tab');
    const underline = document.querySelector('.knowledge-center-nav .kc-underline');
    const navList = document.querySelector('.knowledge-center-nav ul');
    const contentSections = document.querySelectorAll('.knowledge-center-main .kc-content-section');
    const defaultActiveTab = document.querySelector('.knowledge-center-nav .kc-tab.active');
    const manualPagesData = {
        "NexusAI Chat": { // Key matches href="#NexusAI Chat" (minus #)
            // Title can be inferred from key or link text, but content is key
            content:`
<h1>NexusAI Chat</h1>
<p>Welcome to the user guide for NexusAI Chat. This document provides an overview of the platform’s features and functionalities, helping you navigate and make the most of this powerful AI tool. NexusAI Chat is designed to support a variety of tasks, from generating content to retrieving information, all aimed at enhancing your productivity.</p>

<h2>User Interface Overview</h2>
<h3>Model Selection</h3>
<p>At the top of the NexusAI Chat interface, you can choose from several AI models, including GPT, Gemini, Claude, and Llama. Each model has unique strengths, allowing you to select the one best suited for your specific needs.</p>
<p>Additionally, you can set your preferred model as the default model by clicking the “Set as Default” button. This ensures that your chosen model will be used automatically in future sessions, providing a seamless experience.</p>
<center>
    <img src="NexusAI chat user manual 1.png" alt="NexusAI chat user manual 1" width="300" height=200">
    <br> <!-- Line break -->
</center>


<h3>Comparison of models</h3>
<p>Next to the model selection, the + button allows you to compare outputs from different AI models. This feature is helpful for evaluating the performance of various models, enabling you to choose the best option for your tasks.</p>

<center>
    <img src="NexusAI chat user manual 2.png" alt="NexusAI chat user manual 2" width="300" height=200">
    <br> <!-- Line break -->
</center>
<h2>Sidebar Navigation</h2>
<h3>Homepage Shortcut</h3>
<p>The left sidebar includes the NexusAI logo. Clicking this logo takes you back to the homepage, making navigation straightforward.</p>

<h3>New Chat Initiation</h3>
<p>To start a new chat, simply click the pencil icon in the sidebar. This will refresh the chat interface, allowing you to enter a new question or topic without any hassle.</p>

<h3>Tool Accessibility</h3>
<p>The Tools drop-down menu provides easy access to all available tools within NexusAI Chat. This feature enables quick navigation to different functionalities, enhancing your overall user experience.</p>

<center>
    <img src="NexusAI chat user manual 3.png" alt="NexusAI chat user manual 3" width="300" height=200">
    <br> <!-- Line break -->
</center>
<h2>Chat Management Features</h2>
<h3>Tags Section</h3>
<p>In the Tags section, you can view all tags you’ve assigned to your chats. This helps you organize your conversations based on specific themes or topics, making it easier to find them later.</p>

<center>
    <img src="NexusAI chat user manual 8.png" alt="NexusAI chat user manual 8" width="300" height=200">
    <br> <!-- Line break -->
</center>
<h3>Chat History</h3>
<p>The History section keeps a record of all your previous chats, allowing you to revisit any past interactions whenever it's convenient for you.</p>
<center>
    <img src="NexusAI chat user manual 7.png" alt="NexusAI chat user manual 7" width="300" height=200">
    <br> <!-- Line break -->
</center>
<h3>Advanced Chat Management</h3>
<p>Next to each chat in your history, you’ll see a menu represented by three dots. Clicking on this menu provides several options:</p>
<ul>
    <li><strong>Rename:</strong> Change the title of a chat to something more descriptive.</li>
    <li><strong>Clone:</strong> Create a copy of a chat for further use.</li>
    <li><strong>Archive:</strong> Move older conversations out of your main view.</li>
    <li><strong>Share:</strong> Easily distribute chat content to others.</li>
    <li><strong>Delete:</strong> Remove chats that you no longer need.</li>
    <li><strong>Add Tags:</strong> Help categorize chats by assigning them relevant tags.</li>
</ul>
<center>
    <img src="NexusAI chat user manual 10.png" alt="NexusAI chat user manual 10" width="300" height=200">
    <br> <!-- Line break -->
</center>
<h2>Interaction Features</h2>
<h3>Text Box Utilization</h3>
<p>At the bottom of the text input area, you’ll find a + icon. Clicking this icon presents the Wikipedia option, allowing you to access reliable information directly from Wikipedia.</p>
<img src="NexusAI chat user manual 4.png" alt="NexusAI chat user manual 3" class="manual-inline-image">
<br>
<h3>Document Interaction</h3>
<p>The icon next to the plus sign enables you to upload documents. This feature allows you to bring in files and interact with their content right within the chat, adding another layer of functionality.</p>
<img src="NexusAI chat user manual 5.png" alt="NexusAI chat user manual 4" class="manual-inline-image">
<br>
<h3>Web Search Capability</h3>
<p>The globe icon below the text box lets you conduct web searches. This means you can find information online without leaving the chat, greatly enhancing your research capabilities.</p>
<img src="NexusAI chat user manual 6.png" alt="NexusAI chat user manual 6" class="manual-inline-image">
<br>
<h3>Voice Input Functionality</h3>
<p>The mic button allows you to record your voice and convert it to text. This feature makes it easier to communicate your thoughts and questions verbally.</p>
<img src="NexusAI chat user manual 11.png" alt="NexusAI chat user manual 11" class="manual-inline-image">
`
        },
        "HR Policy Assist": { // Key matches href="#HR Policy Assist"
            content: `
                <h1>Comprehensive User Guide for HR Policy Assist</h1>

<p>Welcome to the official user guide for HR Policy Assist. This tool is designed to provide professional support for a wide array of human resource-related inquiries. By utilizing this tool, HR professionals and employees can access essential information regarding company policies and practices efficiently. This guide outlines the functionalities of HR Policy Assist and provides clear instructions on how to use it effectively.</p>

<h2>Overview of HR Policy Assist Functionality</h2>

<p><strong>HR Policy Assist</strong> serves as an interactive platform where users can pose HR-related questions and receive accurate, timely responses. It is equipped to handle a diverse range of queries, facilitating informed decision-making and enhancing understanding of HR policies and procedures.</p>

<h3>Using HR Policy Assist</h3>

<p>To engage with <strong>HR Policy Assist</strong>, simply enter your HR-related question into the chat interface. The tool employs advanced AI technology to process your inquiry and generate a relevant response drawn from a comprehensive database of HR information.</p>
<img src="HR Policy assist user manual 1.png" alt="HR Policy assist user manual 1" class="manual-inline-image">
<br>
<h4>Example Questions:</h4>
<ul>
    <li>"What is the company policy on performance bonuses"</li>
    <li>"What are the CREATE values at Crompton?"</li>
    <li>"How do I apply for maternity leave benefit?"</li>
</ul>

<h3>Resetting the Chat</h3>

<p>Should you wish to initiate a new conversation or clear a previous inquiry, you can do so by clicking the <strong>“New Chat”</strong> button located at the top right of the interface. This action will refresh the chat window, allowing you to start a new line of inquiry without retaining prior context.</p>
<img src="HR Policy Assist user manual 2.png" alt="HR Policy assist user manual 2" class="manual-inline-image">
`
        },
        "Document Query": { // Key matches href="#Document Query"
            content: `
                <h1>Document Query</h1>

<p>Welcome to the official user guide for Document Query. This tool is designed to facilitate the efficient extraction of information from documents, allowing users to upload files and pose inquiries related to their content. This guide provides a detailed walkthrough of the tool's functionalities to ensure you can fully leverage its capabilities.</p>

<h2>Overview of Document Query Functionality</h2>

<p>Document Query enables users to interact with their documents in an effective manner. Please note that, at this time, only PDF files are supported for upload.</p>

<h2>Document Upload Options</h2>

<ul>
    <li><strong>Single Document Upload:</strong> Users can upload one PDF document at a time to initiate inquiries.</li>
    <li><strong>Folder Upload:</strong> Multiple PDF documents can be uploaded simultaneously by selecting an entire folder.</li>
</ul>

   <img src="Document Query user manual 1.png" alt="Document Query user manual 3">
    <br> 

<h2>Navigating the Document Query Interface</h2>

<h3>Accessing Uploaded Documents</h3>

<p>Once documents are uploaded, they will be listed on the main page of the Document Query. Clicking on any document will direct you to a dedicated chat page associated with that document, where the following functionalities are available:</p>

<ul>
    <li><strong>Model Selection:</strong> At the top of the chat window, users can select any AI model to query the document.</li>
    
    <center>
   <img src="Document Query user manual 2.png" alt="Document Query user manual 2" width="300" height=200">
    <br> 
</center> 

    <li><strong>Document Display:</strong> The left side of the screen features a view of the uploaded document, allowing easy reference while formulating your questions.</li>
    
    <img src="Document Query user manual 3.png" alt="Document Query user manual 3">
    <br> 

</ul>

<h2>Engaging with the Document</h2>

<h3>Inquiring with Single Questions</h3>

<p>Users can input questions related to the document's content in the chat interface on the right sidee. The selected AI model will generate a response based on the information contained within the document.</p>
<h3>Page Number Display</h3>
<p> The specific page number where answers are located will be indicated alongside the response.<p>
<img src="Document Query user manual 4.png" alt="Document Query user manual 4">
<h3>Inquiring with Multiple Questions</h3>

<p>For users wishing to engage with multiple documents, click on the document query text to go back to the main page:</p>
<center>
    <img src="Document Query user manual 8.png" alt="Document Query user manual 8" width="700" height=500">
    <br> 
</center>
<ul>
    <li><strong>Multiple documents, multiple questions:</strong> Scroll to the bottom of the page. At the bottom, options will be available to select multiple documents for inquiry.</li>
    <li><strong>Model Preferences:</strong> Each question can be directed to a different AI model, which allows flexibility in querying.</li>
</ul>
<center>
    <img src="Document Query user manual 5.png" alt="Document Query user manual 5" width="700" height=500">
    <br> 
</center>
<h2>Generating Responses</h2>

<p>Upon submitting questions, click the “Generate Answer” button. The responses will be presented in a tabular format for clarity.</p>
<center>
    <img src="Document Query user manual 6.png" alt="Document Query user manual 6" width="700" height=500">
    <br> 
</center>
<h2>Downloading Results</h2>

<p>After generating answers, users have the option to download the resulting table in Excel format.</p>

<center>
   <img src="Document Query user manual 7.png" alt="Document Query user manual 7" width="700" height=500">
    <br> 
</center>
            `
        },
        "Image Canvas": { // Key matches href="#Image Canvas"
            content: `
                <h1>Image Canvas</h1>

<p>Welcome to the official user guide for Image Canvas. This sophisticated tool is designed to facilitate the generation of custom images through advanced AI technology. Users are empowered to select various parameters, allowing for the creation of images that align with specific requirements. This guide offers a thorough walkthrough of the tool's functionalities, ensuring optimal utilization of its capabilities.</p>

<h2>Overview of Image Canvas Functionality</h2>

<p><strong>Image Canvas</strong> provides users with the capability to generate images based on defined prompts and product selections. The user interface has been meticulously designed to promote ease of use.</p>

<h3>Selecting the Image Generation Model</h3>

<p>At the top left of the <strong>Image Canvas</strong> interface, users have the option to choose the image generation model. Currently, two models are available for selection:</p>
<ul>
    <li><strong>DALL-E</strong></li>
    <li><strong>Pollination</strong></li>
</ul>
<br>
<p>Selecting the appropriate model is crucial, as it will dictate the nature of the generated images. Users are encouraged to choose the model that best fits their specific needs.</p>
<img src="Image Canvas user manual 1.png" alt="Image Canvas user manual 1">
<br>
<h3>Choosing Product Categories</h3>

<p>Adjacent to the model selection, users are prompted to select the <strong>product category</strong> that will be featured in the generated image. This categorization helps contextualize the image creation process.</p>
<img src="Image Canvas user manual 2.png" alt="Image Canvas user manual 2">
<br>
<p>Subsequent to the category selection, users have to choose a relevant <strong>sub-category</strong> that complements the primary category.</p>
<img src="Image Canvas user manual 3.png" alt="Image Canvas user manual 3">
<br>
<h3>Selecting the Product</h3>

<p>Following the selection of category and sub-category, users will designate the specific <strong>product</strong> to be included in the image.</p>
<img src="Image Canvas user manual 4.png" alt="Image Canvas user manual 4">
<br>
<h3>Describing the Setting</h3>

<p>In the designated text box, users are invited to provide a comprehensive description of the <strong>setting</strong> for the product. This input serves as the prompt for the AI model, guiding it to generate an image that aligns with the user's envisioned scene and atmosphere.</p>
<img src="Image Canvas user manual 5.png" alt="Image Canvas user manual 5">
<br>
<h3>Generating the Image</h3>

<p>Upon completion of the aforementioned selections—image generation model, product category, sub-category, product, and setting—users should click the <strong>"Generate"</strong> button. The AI will process the input and generate an image based on the specified parameters.</p>

<h3>Customizing the Image</h3>

<p>Once the image is generated, users have the flexibility to <strong>drag and resize</strong> the product within the image as desired. This feature allows for additional customization to align the image with the user's creative vision and requirements.</p>

<img src="Image Canvas user manual 6.png" alt="Image Canvas user manual 6">
<br>
                
            `
        }
        // Add more entries if you add more links in the sidebar
    };

    const blogPostsData = {
    "featured-post": {
    "id": "featured-post",
    "title": "NexusAI: Innovating with Integrity and Embodying Our CREATE Values", // Title from featured post
    "imageSrc": "0001.png", // ** Use the ACTUAL image for the featured post **
    "tag": "NexusAI",
    "author": "Anup Gholkar",
    "fullContent": `
        <p>I'm incredibly excited to formally introduce NexusAI, our new internal AI platform designed to empower each of you, streamline workflows, and unlock new levels of productivity and insight right here at Crompton. As you explore the NexusAI homepage, you'll find a suite of powerful tools: NexusAI Chat for comprehensive assistance, HR Policy Assist for instant answers, Mermaid Editor for planning, Image Canvas for visual design, and Document Query for extracting insights.</p>
        
        <p>NexusAI represents a significant leap forward, born from our Entrepreneurial spirit – taking bold, proactive steps to leverage technology and spot opportunities for improvement. However, innovation at Crompton is always guided by our core principles. With the power of AI comes great responsibility, which is why NexusAI has been built upon the foundation of our CREATE values, ensuring we innovate with integrity and purpose.</p>
        
        <h2>How CREATE Values Shape NexusAI's Responsible AI Practices:</h2>
        <p>Our specific RAI practices are direct reflections of these values:</p>
        
        <ul>
            <li><strong>Fairness and Non-Discrimination (Embodying Caring & Ethical):</strong> We strive to ensure NexusAI tools treat all employees equitably, reflecting our Caring value. We focus on approved, standardized data for tools like HR Policy Assist and conduct audits to mitigate bias, upholding our Ethical commitment to fairness.</li>
            <li><strong>Transparency and Explainability (Embodying Ethical & Team Player):</strong> Building trust (Team Player) requires clarity. We provide clear descriptions of tool capabilities and limitations. Where possible, tools like HR Policy Assist will cite sources, fostering transparency and reflecting our Ethical commitment to integrity.</li>
            <li><strong>Accountability and Governance (Embodying Accountable & Responsible):</strong> Reflecting our Accountable value, we've established clear governance and ownership through a cross-functional team. This ensures we are Responsible for NexusAI's outcomes and stick to our commitments regarding its safe operation.</li>
            <li><strong>Privacy and Security (Embodying Caring & Ethical):</strong> Protecting employee data is paramount, demonstrating we are Caring and Ethical. NexusAI operates within Crompton's security frameworks, employing privacy-preserving techniques and ensuring compliance, respecting individuals and maintaining integrity.</li>
            <li><strong>Reliability, Robustness, and Safety (Embodying Responsible):</strong> NexusAI must be dependable, fulfilling our Responsible value. Rigorous testing, continuous monitoring, and safeguards against misuse ensure the tools perform reliably and safely as intended, sticking to our commitment of delivering functional and secure technology.</li>
            <li><strong>Human-Centricity and Beneficial Use (Embodying Caring & Ethical):</strong> NexusAI is built for people, aligning with our Caring value to genuinely help. Its purpose is to augment your capabilities ethically. We emphasize that AI is an aid, and critical decisions require human judgment, ensuring technology serves our people and our Ethical principles.</li>
        </ul>
 
        <h2>An Ongoing Commitment & Your Role as a Team Player</h2>
        <p>Living our CREATE values through Responsible AI is an ongoing journey. As NexusAI evolves, so will our practices, driven by our Entrepreneurial spirit of continuous learning and improvement.</p>

        <p>Your role as a Team Player is crucial here. We encourage you to explore NexusAI and provide constructive feedback. If you encounter issues, have concerns, or see opportunities for improvement regarding fairness, transparency, or alignment with our values, please share feedback within NexusAI. Your input helps us build trust and ensure NexusAI truly serves our shared objectives.</p>

        <p>NexusAI holds immense potential for Crompton. By grounding it firmly in our CREATE values through robust Responsible AI practices, we are ensuring this powerful technology becomes a trusted, ethical, and indispensable tool for all of us.</p>

        <p>Thank you for embracing this innovation, and let's continue to CREATE our future together, responsibly.</p>
    `
},
"post-1": {
    id: "post-1",
    title: "NexusAI: Innovating with Integrity and Embodying Our CREATE Values", // Card 1 title
    imageSrc: "0001.png", // Image for card 1
    tag: "NexusAI",
    author: "Anup Gholkar",
    fullContent: `
        <p>I'm incredibly excited to formally introduce NexusAI, our new internal AI platform designed to empower each of you, streamline workflows, and unlock new levels of productivity and insight right here at Crompton. As you explore the NexusAI homepage, you'll find a suite of powerful tools: NexusAI Chat for comprehensive assistance, HR Policy Assist for instant answers, Mermaid Editor for planning, Image Canvas for visual design, and Document Query for extracting insights.</p>
        
        <p>NexusAI represents a significant leap forward, born from our Entrepreneurial spirit – taking bold, proactive steps to leverage technology and spot opportunities for improvement. However, innovation at Crompton is always guided by our core principles. With the power of AI comes great responsibility, which is why NexusAI has been built upon the foundation of our CREATE values, ensuring we innovate with integrity and purpose.</p>
        
        <h2>How CREATE Values Shape NexusAI's Responsible AI Practices:</h2>
        <p>Our specific RAI practices are direct reflections of these values:</p>
        
        <ul>
            <li><strong>Fairness and Non-Discrimination (Embodying Caring & Ethical):</strong> We strive to ensure NexusAI tools treat all employees equitably, reflecting our Caring value. We focus on approved, standardized data for tools like HR Policy Assist and conduct audits to mitigate bias, upholding our Ethical commitment to fairness.</li>
            <li><strong>Transparency and Explainability (Embodying Ethical & Team Player):</strong> Building trust (Team Player) requires clarity. We provide clear descriptions of tool capabilities and limitations. Where possible, tools like HR Policy Assist will cite sources, fostering transparency and reflecting our Ethical commitment to integrity.</li>
            <li><strong>Accountability and Governance (Embodying Accountable & Responsible):</strong> Reflecting our Accountable value, we've established clear governance and ownership through a cross-functional team. This ensures we are Responsible for NexusAI's outcomes and stick to our commitments regarding its safe operation.</li>
            <li><strong>Privacy and Security (Embodying Caring & Ethical):</strong> Protecting employee data is paramount, demonstrating we are Caring and Ethical. NexusAI operates within Crompton's security frameworks, employing privacy-preserving techniques and ensuring compliance, respecting individuals and maintaining integrity.</li>
            <li><strong>Reliability, Robustness, and Safety (Embodying Responsible):</strong> NexusAI must be dependable, fulfilling our Responsible value. Rigorous testing, continuous monitoring, and safeguards against misuse ensure the tools perform reliably and safely as intended, sticking to our commitment of delivering functional and secure technology.</li>
            <li><strong>Human-Centricity and Beneficial Use (Embodying Caring & Ethical):</strong> NexusAI is built for people, aligning with our Caring value to genuinely help. Its purpose is to augment your capabilities ethically. We emphasize that AI is an aid, and critical decisions require human judgment, ensuring technology serves our people and our Ethical principles.</li>
        </ul>
 
        <h2>An Ongoing Commitment & Your Role as a Team Player</h2>
        <p>Living our CREATE values through Responsible AI is an ongoing journey. As NexusAI evolves, so will our practices, driven by our Entrepreneurial spirit of continuous learning and improvement.</p>

        <p>Your role as a Team Player is crucial here. We encourage you to explore NexusAI and provide constructive feedback. If you encounter issues, have concerns, or see opportunities for improvement regarding fairness, transparency, or alignment with our values, please share feedback within NexusAI. Your input helps us build trust and ensure NexusAI truly serves our shared objectives.</p>

        <p>NexusAI holds immense potential for Crompton. By grounding it firmly in our CREATE values through robust Responsible AI practices, we are ensuring this powerful technology becomes a trusted, ethical, and indispensable tool for all of us.</p>

        <p>Thank you for embracing this innovation, and let's continue to CREATE our future together, responsibly.</p>
    `
},
        "post-2": {
            id: "post-2",
    title: "Dependable Assistance: How We Ensure Reliability in NexusAI's HR Policy Assist (Our Responsible Commitment)", // Card 1 title
    imageSrc: "0002.png", // Image for card 1
    tag: "NexusAI",
    author: "Anup Gholkar",
    fullContent: `
        <p>Navigating company policies to find specific answers can sometimes feel like searching for a needle in a haystack. Whether you're clarifying leave entitlements, understanding expense guidelines, or checking the latest WFH policy, getting accurate information quickly is essential.</p>
        
        <p>That's precisely why we developed the HR Policy Assist, a key feature within our NexusAI platform. Its purpose is simple: to provide you with instant, easy-to-understand answers to your HR-related questions, directly drawing from official Crompton documentation.</p>
        
        <p>But for a tool like this to be truly valuable, it needs more than just speed – it needs reliability. When dealing with important information that affects your work and well-being, you must be able to trust the answers you receive. This reliability is not just a technical goal; it's a core component of our commitment to Responsible AI and a direct reflection of our CREATE values.</p>
        
        <h2>Reliability: The Foundation of Trustworthy AI</h2>
        <p>An AI assistant providing incorrect or outdated policy information is worse than no assistant at all. It erodes trust, causes confusion, and can lead to mistakes. That's why ensuring the dependability of the HR Policy Assist has been a top priority from day one. Building trustworthy AI means building reliable AI.</p>
        
        <h2>How We Built Reliability into the HR Policy Assist:</h2>
        <p>Our commitment to reliability isn't just a statement; it's embedded in the processes we follow:</p>
        <ul>
            <li><strong>Grounded in Official Sources:</strong> The HR Policy Assist doesn't guess or browse the internet. Its knowledge base is built exclusively from approved, up-to-date, official Crompton HR policy documents and resources. This ensures the information it accesses is authoritative and correct from the start.</li>
            <li><strong>Rigorous Testing & Validation:</strong> Before launch, and with every significant update, the tool undergoes meticulous testing. We don't just check if it answers; we check if it answers accurately. This involves asking a wide range of questions – simple to complex – and validating the AI's responses against the source documents, often in collaboration with our HR team.</li>
            <li><strong>Mechanisms for Keeping Knowledge Current:</strong> Policies evolve. We have established clear processes, working closely with HR, to update the AI's knowledge base promptly whenever official policies are amended or added. This ensures the information provided remains current and relevant.</li>
            <li><strong>Continuous Monitoring:</strong> Our work doesn't stop at launch. We continuously monitor the performance of the HR Policy Assist, tracking accuracy metrics, analyzing user interactions (while respecting privacy), and identifying any patterns of incorrect answers or areas where understanding needs refinement. This allows us to proactively address issues and retrain the model as needed.</li>
        </ul>
        
        <h2>Put It to the Test – Help Us Stay Reliable!</h2>
        <p>The HR Policy Assist is designed to be your dependable first stop for policy questions. We encourage you to try it out! Ask about:</p>
        <ul>
            <li>Specific leave policies (Annual, Sick, Parental)</li>
            <li>Travel and expense guidelines</li>
            <li>Benefits information</li>
            <li>Performance review processes</li>
            <li>Code of Conduct queries</li>
        </ul>
        
        <p>Your interaction is valuable. Even more valuable is your feedback on the accuracy of the responses. If you ever feel an answer is unclear, incorrect, or missing context, please let us know using the feedback mechanism within NexusAI. This direct feedback is crucial – it helps us uphold our commitment to reliability and continuously improve the tool for everyone. It embodies the Team Player spirit of seeking constructive feedback to achieve shared objectives.</p>

        <p>We are committed to providing you with AI tools that are not only powerful but also trustworthy and dependable. The HR Policy Assist is a prime example of this commitment in action, driven by our Responsible and Accountable values.</p>
        
        <p>Thank you for using NexusAI!</p>
    `
},
        "post-3": {
             id: "post-3",
             title: "Maximizing Data Security with NexusAI", // Card 3 title
             imageSrc: "Component 13.jpg", // Image for card 3
             tag: "Security",
            author:"Chinmay Pagey",
              
             fullContent: `
        <p>In today's digital world, where data breaches and privacy concerns dominate headlines, security has become a paramount concern for organizations and users alike. It is important to understand the importance of protecting sensitive data and ensuring user privacy. Our internal platform is designed with robust security features, leveraging our own vector embedding model to provide a secure, efficient, and reliable environment. Here’s an overview of the security measures that make NexusAI a trusted platform.</p>
        
        <h2>1. Custom Vector Embedding Model</h2>
        <p>At the heart of NexusAI’s security architecture lies our proprietary vector embedding model. Unlike generic models, our custom embedding model is optimized for the specific needs of our applications while maintaining a strong emphasis on data privacy and integrity. This model enables us to process data without exposing sensitive information during computation, as the embeddings represent complex data in a manner that is abstracted and secure.</p>
        
        <h2>2. Data Encryption</h2>
        <p>We employ strong encryption methods for data at rest and in transit. This means that whether data is being stored in our systems or is actively being transmitted over the network, it is protected from unauthorized access. Utilizing industry-standard encryption protocols, we ensure that your data remains confidential and secure against potential threats.</p>
        
        <h2>3. User Authentication and Access Control</h2>
        <p>NexusAI implements robust user authentication mechanisms, ensuring that only authorized personnel can access sensitive information. We use multi-factor authentication (MFA) to provide an additional layer of security, verifying user identities through multiple forms of verification. Furthermore, our access control policies limit data visibility based on user roles, ensuring that individuals only have access to the information necessary for their tasks.</p>
        
        <h2>4. Regular Security Audits and Updates</h2>
        <p>To maintain high security standards, we conduct regular security audits and assessments of our platform. This proactive approach allows us to identify vulnerabilities and address potential threats before they can be exploited. Additionally, we continuously update our software and security protocols in line with the latest industry best practices and compliance requirements.</p>
        
        <h2>5. Privacy-First Approach</h2>
        <p>At NexusAI, we’re committed to protecting user privacy. Our architecture is designed to minimize data retention while ensuring that users can utilize our tools effectively. We also comply with data protection regulations and best practices, giving users confidence that their sensitive information is handled responsibly.</p>
        
        <h2>Conclusion</h2>
        <p>In a world where security and privacy are critical, NexusAI stands out by offering a platform that prioritizes user protection while delivering advanced functionalities. By harnessing our own vector embedding model along with robust security measures, we provide a secure environment that enhances productivity without compromising safety. Explore NexusAI today and experience the peace of mind that comes with a platform built with security at its core.</p>
    `
        }
        // Add more post objects as needed
    };
        // Add more post objects as needed
        populateBlogCardAuthors(); 

    // Selectors for the new blog post detail elements
    const blogPostDetailSection = document.getElementById('blog-post-detail');
    const blogListSection = document.getElementById('blogs-content'); // The main blog list view
    const blogPostTitleEl = document.getElementById('blog-post-title');
    const blogPostImageEl = document.querySelector('#blog-post-detail .blog-post-image img');
    const blogPostTagEl = document.querySelector('#blog-post-detail .blog-post-header .tag');
    const blogPostViewsEl = document.getElementById('blog-post-views');
    const blogPostAuthorEl = document.getElementById('blog-post-author'); 
    const blogPostBodyEl = document.getElementById('blog-post-body');
    const backToBlogsBtn = document.querySelector('.back-to-blogs-btn');
    function displayBlogPost(postId) {
        const postData = blogPostsData[postId];

        if (!postData || !blogPostDetailSection || !blogListSection) {
            console.error("Blog post data or sections not found for ID:", postId);
            return;
        }

        // Populate the detail view elements
        blogPostTitleEl.textContent = postData.title;
        blogPostImageEl.src = postData.imageSrc;
        blogPostImageEl.alt = postData.title;
        blogPostTagEl.textContent = postData.tag;
        // blogPostViewsEl.textContent = postData.views; // If you implement views

        // Populate Author
        if (blogPostAuthorEl) {
            if (postData.author) {
                blogPostAuthorEl.textContent = postData.author;
                // Make sure the parent "By " element is visible
                if (blogPostAuthorEl.parentElement.classList.contains('blog-author-detail')) {
                     blogPostAuthorEl.parentElement.style.display = 'inline'; // Or 'block'
                }
            } else {
                blogPostAuthorEl.textContent = '';
                // Hide the "By " text if no author
                if (blogPostAuthorEl.parentElement.classList.contains('blog-author-detail')) {
                    blogPostAuthorEl.parentElement.style.display = 'none';
                }
            }
        }

        blogPostBodyEl.innerHTML = postData.fullContent;

        // Hide the blog list view and show the detail view
        blogListSection.classList.remove('active-content');
        blogPostDetailSection.classList.add('active-content');

        window.scrollTo(0, 0); // Scroll to top
    }
    /*
    // --- Tab Switching Logic ---
    function updateUnderline() {
        const activeTab = document.querySelector('.knowledge-center-nav .kc-tab.active');
        if (!activeTab || !underline || !navList) return; // Exit if elements not found

        const activeSpan = activeTab.querySelector('span');
        if (!activeSpan) return; // Exit if span not found

        // Calculate position relative to the navList (the UL)
        const spanOffsetLeft = activeSpan.offsetLeft;
        const spanWidth = activeSpan.offsetWidth;

        // Apply styles to the underline element
        underline.style.left = `${spanOffsetLeft}px`;
        underline.style.width = `${spanWidth}px`;
    }
   */
  // Inside script.js, can be placed near other utility functions or before the DOMContentLoaded listener

  function populateBlogCardAuthors() {
    console.log("Running populateBlogCardAuthors..."); // 1. Is function called?
    const blogCards = document.querySelectorAll('#blogs-content .blog-card');
    console.log("Found blog cards:", blogCards.length); // 2. Are cards found?

    blogCards.forEach((card, index) => {
        console.log(`Processing card ${index + 1}`);
        const linkOverlay = card.querySelector('.card-link-overlay');
        if (linkOverlay) {
            const postId = linkOverlay.dataset.postId;
            console.log(` - Post ID: ${postId}`); // 3. Is postId found?
            const postData = blogPostsData[postId];
            console.log(` - Post Data:`, postData); // 4. Is data found for this ID?

            const authorNameSpan = card.querySelector('.blog-card-meta .author-name');
            console.log(` - Author Name Span element:`, authorNameSpan); // 5. Is the span element found?

            if (postData && postData.author && authorNameSpan) {
                console.log(`   - Setting author: ${postData.author}`); // 6. Is it trying to set the author?
                authorNameSpan.textContent = postData.author;
                if (authorNameSpan.parentElement.classList.contains('blog-author')) {
                    authorNameSpan.parentElement.style.display = 'inline';
                }
            } else {
                console.log(`   - Condition not met to set author. postData: ${!!postData}, postData.author: ${postData ? postData.author : 'N/A'}, authorNameSpan: ${!!authorNameSpan}`);
                if (authorNameSpan && authorNameSpan.parentElement.classList.contains('blog-author')) {
                    authorNameSpan.parentElement.style.display = 'none';
                }
            }
        } else {
            console.log(` - Card ${index + 1} missing linkOverlay`);
        }
    });
}
    function displayBlogPost(postId) {
        const postData = blogPostsData[postId];

        if (!postData || !blogPostDetailSection || !blogListSection) {
            console.error("Blog post data or sections not found for ID:", postId);
            return;
        }

        // Populate the detail view elements
        blogPostTitleEl.textContent = postData.title;
        blogPostImageEl.src = postData.imageSrc;
        blogPostImageEl.alt = postData.title;
        blogPostTagEl.textContent = postData.tag;
        blogPostViewsEl.textContent = postData.views;
        blogPostBodyEl.innerHTML = postData.fullContent;

        // Hide the blog list view and show the detail view
        blogListSection.classList.remove('active-content');
        blogPostDetailSection.classList.add('active-content');

        window.scrollTo(0, 0); // Scroll to top
        console.log("displayBlogPost - Attempting to populate author for post ID:", postId); // 1.
    console.log("displayBlogPost - Post data:", postData); // 2.
    if (blogPostAuthorEl) {
        console.log("displayBlogPost - blogPostAuthorEl found:", blogPostAuthorEl); // 3.
        if (postData.author) {
            console.log(`displayBlogPost - Setting author: ${postData.author}`); // 4.
            blogPostAuthorEl.textContent = postData.author;
            if (blogPostAuthorEl.parentElement.classList.contains('blog-author-detail')) {
                 blogPostAuthorEl.parentElement.style.display = 'inline';
            }
        } else {
            console.log("displayBlogPost - No author in postData or postData.author is falsy."); // 5.
            blogPostAuthorEl.textContent = '';
            if (blogPostAuthorEl.parentElement.classList.contains('blog-author-detail')) {
                blogPostAuthorEl.parentElement.style.display = 'none';
            }
        }
    } else {
        console.log("displayBlogPost - blogPostAuthorEl NOT found."); // 6.
    }

    blogPostBodyEl.innerHTML = postData.fullContent;
    }
    

    function activateTab(tabToActivate) {
        if (!tabToActivate) return; // Exit if no tab provided

        const targetId = tabToActivate.getAttribute('data-target');
        const targetContent = document.querySelector(targetId);

        // Deactivate all tabs and hide all content sections first
        tabs.forEach(t => t.classList.remove('active'));
        contentSections.forEach(section => section.classList.remove('active-content'));

        // Activate the target tab and its content section
        tabToActivate.classList.add('active');
        if (targetContent) {
            targetContent.classList.add('active-content');
            // Trigger layout recalculation slightly after display: block if needed for animations
            // void targetContent.offsetWidth;
        } else {
            console.warn(`Content section not found for target: ${targetId}`);
        }
        //updateUnderline(); // Update underline after activating tab
    }

    // Add click listeners to all tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault();
            if (!this.classList.contains('active')) { // Only switch if not already active
                 activateTab(this);
            }
            tabs.forEach(t => t.classList.remove('active'));

            // Add active class to the clicked tab
            tab.classList.add('active');

            // Update the underline position
            //updateUnderline();
        });
    });
    //updateUnderline();

    // Initialize the view: Activate the default tab content on initial load
    if (defaultActiveTab) {
        activateTab(defaultActiveTab); // Activate and set initial underline
    } else if (tabs.length > 0) {
        // Fallback: If no tab has 'active' class, activate the first one
        // activateTab already handles adding the 'active' class
        activateTab(tabs[0]);
    }

    // Optional: Update underline on window resize if layout might change
    


    // --- NexusAI Manual Sidebar Interactivity ---
    const toggleButtons = document.querySelectorAll('.manual-nav-list .toggle-btn');
    const manualLinks = document.querySelectorAll('.manual-sidebar .manual-link');
    const manualContentDisplay = document.querySelector('.manual-content-display');
    const breadcrumbsDisplay = document.querySelector('.manual-content-display .breadcrumbs');

    // Sidebar section toggling (Keep existing logic)
    toggleButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            const targetId = this.getAttribute('data-target');
            const submenu = document.querySelector(targetId);
            if (submenu) {
                submenu.classList.toggle('hidden');
                this.textContent = submenu.classList.contains('hidden') ? '[+]' : '[-]';
            }
        });
    });

    // Manual page link clicking (Keep existing simulation logic)
    manualLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            manualLinks.forEach(l => l.classList.remove('active'));
            document.querySelectorAll('.manual-nav-list .submenu a.active').forEach(sa => sa.classList.remove('active'));
            this.classList.add('active');

            const pageId = this.getAttribute('href').substring(1); // e.g., "NexusAI Chat"
            const pageTitle = this.textContent; // Title from link text
            const parentToggle = this.closest('ul.submenu')?.previousElementSibling;
            const parentTitle = parentToggle ? parentToggle.textContent.replace(/\[.?\]/,'').trim() : (this.closest('nav > ul > li > a') ? this.textContent : 'Docs');

            console.log(`Loading manual content for: ${pageId}`);

            // ---=== Load Custom Content ===---
            if (manualContentDisplay && breadcrumbsDisplay) {
                // 1. Update Breadcrumbs (as before)
                if (parentTitle !== pageTitle) {
                    breadcrumbsDisplay.innerHTML = `<a href="#">Docs</a> > <a href="#">${parentTitle}</a> > <span>${pageTitle}</span>`;
                } else {
                    breadcrumbsDisplay.innerHTML = `<a href="#">Docs</a> > <span>${pageTitle}</span>`;
                }

                // 2. Get the custom content based on pageId
                const pageData = manualPagesData[pageId];

                // 3. Display the content or a fallback message
                if (pageData && pageData.content) {
                     // Inject the breadcrumbs first, then the fetched content
                    manualContentDisplay.innerHTML = ''; // Clear previous content fully
                    manualContentDisplay.appendChild(breadcrumbsDisplay); // Add updated breadcrumbs
                    // Create a temporary div to append the HTML string content
                    const contentWrapper = document.createElement('div');
                    contentWrapper.innerHTML = pageData.content;
                    // Append all children from the wrapper to the display area
                    while (contentWrapper.firstChild) {
                        manualContentDisplay.appendChild(contentWrapper.firstChild);
                    }

                } else {
                    // Fallback if no content is defined for this pageId
                    manualContentDisplay.innerHTML = ''; // Clear previous content fully
                    manualContentDisplay.appendChild(breadcrumbsDisplay); // Add updated breadcrumbs
                    const h1 = document.createElement('h1');
                    h1.textContent = pageTitle; // Use title from link
                    manualContentDisplay.appendChild(h1);
                    const p1 = document.createElement('p');
                    p1.textContent = `Content for "${pageTitle}" is not available yet. Please check back later.`;
                    manualContentDisplay.appendChild(p1);
                    console.warn(`Content not found in manualPagesData for ID: ${pageId}`);
                }
                 manualContentDisplay.scrollTop = 0; // Scroll to top
            }
            // ---=== End Custom Content Loading ===---
        });
    });


    // --- Blog Carousel Logic (REMOVED - Replaced by new blog layout) ---
    // --- Old Carousel JS Code deleted ---


    // --- NEW: Blog Section Button Interactions ---
    // Example: Alert on 'Read more' click in Featured Post
    const featuredReadMoreButton = document.querySelector('#blogs-content .featured-post-section .btn-read-more');
     if (featuredReadMoreButton) {
          // Add the data attribute if it's missing (optional fallback)
          if (!featuredReadMoreButton.hasAttribute('data-post-id')) {
             featuredReadMoreButton.setAttribute('data-post-id', 'featured-post');
          }
          featuredReadMoreButton.addEventListener('click', (e) => {
             e.preventDefault();
             const postId = e.target.dataset.postId;
             if (postId) {
                 displayBlogPost(postId);
             } else {
                 console.warn("Featured post button is missing data-post-id attribute.");
             }
         });
     }

    // Example: Alert on 'View all' blogs click
    const viewAllBlogsButton = document.querySelector('#blogs-content .blogs-header .btn-view-all');
    if (viewAllBlogsButton) {
        viewAllBlogsButton.addEventListener('click', (e) => {
            e.preventDefault(); // Stop link navigation for demo
            alert("DEMO: Clicked 'View all' blogs.");
            // In a real site, you would navigate:
            // window.location.href = viewAllBlogsButton.href;
        });
    }

     // Example: Alert on Blog Card click (using the overlay)
     const blogCardLinks = document.querySelectorAll('#blogs-content .blog-card .card-link-overlay');
     blogCardLinks.forEach(link => {
         link.addEventListener('click', (e) => {
             e.preventDefault();
             const postId = link.dataset.postId;
             if (postId) {
                 displayBlogPost(postId);
             } else {
                 console.warn("Blog card link is missing data-post-id attribute.");
             }
         });
     });

     if (backToBlogsBtn) {
        backToBlogsBtn.addEventListener('click', () => {
            if (blogPostDetailSection) blogPostDetailSection.classList.remove('active-content');
            if (blogListSection) blogListSection.classList.add('active-content');
            window.scrollTo(0, 0); // Scroll to top
        });
    }

    // --- What's New "Load More" Logic (Keep existing placeholder logic) ---
    const loadMoreBtn = document.querySelector('#whats-new-content .load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            console.log('Load More Updates clicked - implement fetching logic here');
            // **REPLACE WITH ACTUAL AJAX/FETCH LOGIC**
            const whatsNewSection = document.getElementById('whats-new-content');
            const dummyItem = document.createElement('article');
            dummyItem.className = 'update-item';
            dummyItem.style.opacity = '0'; // Start hidden for fade-in
            dummyItem.innerHTML = `
                <div class="update-header"><span class="update-date">August 01, 2023</span></div>
                <div class="update-body">
                    <i class="fas fa-bug update-icon"></i>
                    <div class="update-text">
                        <h3>Minor Bug Fixes</h3>
                        <p>Resolved issues related to user session timeouts and improved error handling in the reporting module.</p>
                        <div class="update-tags"><span class="tag">Bug Fix</span></div>
                    </div>
                </div>`;
            whatsNewSection.insertBefore(dummyItem, this);
            // Simple fade-in effect
            setTimeout(() => { dummyItem.style.transition = 'opacity 0.5s ease'; dummyItem.style.opacity = '1'; }, 10);

            // Example: Hide button after one load for demo
            // this.style.display = 'none';
        });
    }

}); // End of DOMContentLoaded 
