document.addEventListener('DOMContentLoaded', function() {

    const tabs = document.querySelectorAll('.knowledge-center-nav .kc-tab');
    const underline = document.querySelector('.knowledge-center-nav .kc-underline');
    const navList = document.querySelector('.knowledge-center-nav ul');
    const contentSections = document.querySelectorAll('.knowledge-center-main .kc-content-section');
    const defaultActiveTab = document.querySelector('.knowledge-center-nav .kc-tab.active');
    const manualPagesData = {
        "NexusAI Chat": { // Key matches href="#NexusAI Chat" (minus #)
            // Title can be inferred from key or link text, but content is key
            content: `
                <h1>NexusAI Chat</h1>
                <p>Welcome to the NexusAI Chat documentation. This powerful tool allows you to engage in conversational AI interactions for various tasks.</p>
                <h2>Key Features:</h2>
                <ul>
                    <li>Natural language understanding for intuitive queries.</li>
                    <li>Context retention for follow-up questions.</li>
                    <li>Ability to assist with brainstorming, drafting text, and summarizing information.</li>
                    <li>Integration with other NexusAI modules (details pending).</li>
                </ul>
                <h2>Getting Started:</h2>
                <p>Simply type your question or prompt into the chat interface and press Enter. Be clear and specific for the best results.</p>
                <p><strong>Example Prompt:</strong> "Draft an email to the team about the upcoming project deadline."</p>
            `
        },
        "HR Policy Assist": { // Key matches href="#HR Policy Assist"
            content: `
                <h1>HR Policy Assist</h1>
                <p>The HR Policy Assist module provides quick access to information regarding company policies, benefits, and procedures.</p>
                <p>Instead of searching through lengthy documents, ask specific questions in plain language.</p>
                <h2>Example Questions:</h2>
                <ul>
                    <li>"What is the company policy on performance bonuses"</li>
                    <li>"What are the CREATE values at Crompton?"</li>
                    <li>"How do I apply for maternity benefit leaves?"</li>
                </ul>
                <p><strong>Note:</strong> HR Policy Assist is trained on approved company documents. For complex or sensitive matters, please consult directly with the HR department.</p>
                 <img src="HR Policy assist screen.png" alt="Placeholder HR Assist Interface" class="manual-inline-image">  <!-- Example Image -->
            `
        },
        "Document Query": { // Key matches href="#Document Query"
            content: `
                <h1>Document Query</h1>
                <p>Leverage NexusAI to interact with your uploaded documents (PDFs, legal documents, contracts, reports etc.). Ask questions directly about the content within your files.</p>
                <h2>How it Works:</h2>
                <ol>
                    <li>Upload your document(s) through the designated interface.</li>
                    <li>Select the document you wish to query.</li>
                    <li>Type your question related to the document's content into the query bar.</li>
                    <li>NexusAI analyzes the document and provides relevant answers or excerpts.</li>
                </ol>
                <h2>Use Cases:</h2>
                <ul>
                    <li>Finding specific clauses in contracts.</li>
                    <li>Summarizing long reports.</li>
                    <li>Extracting key data points from technical documents.</li>
                </ul>
                <p>Ensure your documents have selectable text for best results (Documents other than PDFs may not work).</p>
            `
        },
        "Image Canvas": { // Key matches href="#Image Canvas"
            content: `
                <h1>Image Canvas</h1>
                <p>The Image Canvas integrates AI capabilities for image generation and editing (Details subject to feature availability).</p>
                <h2>Features:</h2>
                <ul>
                    <li>Generating images from text descriptions (Text-to-Image).</li>
                    <li>Add Crompton Products in the images.</li>
                    <li>Experiment with multiple posters for you advertising needs</li>
                </ul>
                <p>This section will be updated with detailed instructions and examples as the Image Canvas features are rolled out.</p>
                
            `
        }
        // Add more entries if you add more links in the sidebar
    };

    const blogPostsData = {
        "featured-post": {
        "id": "featured-post",
        "title": "Unlocking Efficiency and Innovation with NexusAI", // Title from featured post
        "imageSrc": "Component 12.jpg", // ** Use the ACTUAL image for the featured post **
        "tag": "Blog",
        "fullContent": `
            <p>In the ever-evolving landscape of today’s business world, having access to advanced tools that streamline workflows and foster collaboration is essential. We are excited to introduce <strong>NexusAI</strong>, our internal platform designed to enhance productivity through a suite of intuitive tools tailored to meet diverse needs. From powerful chat interfaces to specialized HR assistance, NexusAI empowers our team to work smarter, not harder. Let’s dive into the various tools NexusAI offers that can revolutionize your day-to-day tasks.</p>
            
            <h2>What is NexusAI?</h2>
            <p>NexusAI is an all-in-one platform housing a range of tools aimed at optimizing different aspects of our work environment. Whether you’re looking to generate high-quality images for advertising or need help drafting HR policies, NexusAI has a solution for you. Below, we’ll explore the key tools within NexusAI and how they can enhance your workflows.</p>
            
            <h2>Key Features of NexusAI</h2>
            <ol>
                <li>
                    <h3>NexusAI Chat</h3>
                    <p>The cornerstone of our platform, NexusAI Chat, allows users to interact with multiple large language models (LLMs) through an easy-to-use chat interface. Need quick answers or assistance on a project? Simply engage with NexusAI Chat to receive instant insights, brainstorm ideas, or clarify doubts. Whether you're drafting emails, generating reports, or conducting research, this tool is designed to enhance communication and collaboration across teams.</p>
                </li>
                <li>
                    <h3>HR Policy Assist</h3>
                    <p>Navigating HR-related queries can often be a daunting task. With our HR Policy Assist tool, you can receive immediate answers to your HR questions, ranging from regulatory compliance to employee benefits. This feature streamlines the process of finding the information you need, ensuring that you remain informed about policies and procedures all while saving valuable time.</p>
                </li>
                <li>
                    <h3>Document Query</h3>
                    <p>The Document Query tool revolutionizes how we handle documentation. Users can upload their documents and engage in a dynamic analysis of the content. Got a lengthy policy manual or a complex report? Simply ask questions, and the tool will provide relevant insights and summaries, allowing you to find what you need without combing through pages of text. This feature significantly enhances research efficiency and boosts productivity.</p>
                </li>
                <li>
                    <h3>Image Canvas</h3>
                    <p>For those in marketing and advertising, the Image Canvas tool is a game-changer. Users can generate captivating images using Crompton products tailored for their advertising campaigns. Simplifying the creative process, this tool allows you to visualize your ideas quickly and efficiently, ensuring your marketing materials are both appealing and aligned with branding.</p>
                </li>
                <li>
                    <h3>Mermaid Editor</h3>
                    <p>Communicating complex information clearly is crucial, and the Mermaid Editor tool simplifies this process. Create visually engaging flowcharts and diagrams for presentations, reports, or team meetings in minutes. By transforming intricate ideas into easily digestible visuals, the Mermaid Editor ensures that your audience understands your message quickly.</p>
                </li>
            </ol>
            
            <h2>Why NexusAI Matters</h2>
            <ul>
                <li><strong>Increased Efficiency:</strong> Automate tasks and access information quickly, allowing you to focus on more strategic initiatives.</li>
                <li><strong>Enhanced Collaboration:</strong> Foster teamwork by using shared tools that facilitate communication and idea generation.</li>
                <li><strong>Improved Accessibility:</strong> With easy-to-use interfaces, all team members can access the information and tools they need without extensive training.</li>
                <li><strong>Data-Driven Insights:</strong> Leverage AI-powered tools to make informed decisions based on real-time data analysis.</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>NexusAI is more than just a collection of tools; it represents a significant leap forward in how we work and collaborate. By harnessing the power of AI, we can streamline our workflows, enhance creativity, and make data-driven decisions that propel our organization forward.</p>
            
            <p>Explore NexusAI today and discover how you can leverage these innovative tools to optimize your work processes, foster collaboration, and ultimately unlock your full potential.</p>
        `
},
        "post-1": {
            id: "post-1",
            title: "Unlocking Efficiency and Innovation with NexusAI", // Card 1 title
            imageSrc: "Component 12.jpg", // Image for card 1
            tag: "NexusAI",
            fullContent: `
            <p>In the ever-evolving landscape of today’s business world, having access to advanced tools that streamline workflows and foster collaboration is essential. We are excited to introduce <strong>NexusAI</strong>, our internal platform designed to enhance productivity through a suite of intuitive tools tailored to meet diverse needs. From powerful chat interfaces to specialized HR assistance, NexusAI empowers our team to work smarter, not harder. Let’s dive into the various tools NexusAI offers that can revolutionize your day-to-day tasks.</p>
            
            <h2>What is NexusAI?</h2>
            <p>NexusAI is an all-in-one platform housing a range of tools aimed at optimizing different aspects of our work environment. Whether you’re looking to generate high-quality images for advertising or need help drafting HR policies, NexusAI has a solution for you. Below, we’ll explore the key tools within NexusAI and how they can enhance your workflows.</p>
            
            <h2>Key Features of NexusAI</h2>
            <ol>
                <li>
                    <h3>NexusAI Chat</h3>
                    <p>The cornerstone of our platform, NexusAI Chat, allows users to interact with multiple large language models (LLMs) through an easy-to-use chat interface. Need quick answers or assistance on a project? Simply engage with NexusAI Chat to receive instant insights, brainstorm ideas, or clarify doubts. Whether you're drafting emails, generating reports, or conducting research, this tool is designed to enhance communication and collaboration across teams.</p>
                </li>
                <li>
                    <h3>HR Policy Assist</h3>
                    <p>Navigating HR-related queries can often be a daunting task. With our HR Policy Assist tool, you can receive immediate answers to your HR questions, ranging from regulatory compliance to employee benefits. This feature streamlines the process of finding the information you need, ensuring that you remain informed about policies and procedures all while saving valuable time.</p>
                </li>
                <li>
                    <h3>Document Query</h3>
                    <p>The Document Query tool revolutionizes how we handle documentation. Users can upload their documents and engage in a dynamic analysis of the content. Got a lengthy policy manual or a complex report? Simply ask questions, and the tool will provide relevant insights and summaries, allowing you to find what you need without combing through pages of text. This feature significantly enhances research efficiency and boosts productivity.</p>
                </li>
                <li>
                    <h3>Image Canvas</h3>
                    <p>For those in marketing and advertising, the Image Canvas tool is a game-changer. Users can generate captivating images using Crompton products tailored for their advertising campaigns. Simplifying the creative process, this tool allows you to visualize your ideas quickly and efficiently, ensuring your marketing materials are both appealing and aligned with branding.</p>
                </li>
                <li>
                    <h3>Mermaid Editor</h3>
                    <p>Communicating complex information clearly is crucial, and the Mermaid Editor tool simplifies this process. Create visually engaging flowcharts and diagrams for presentations, reports, or team meetings in minutes. By transforming intricate ideas into easily digestible visuals, the Mermaid Editor ensures that your audience understands your message quickly.</p>
                </li>
            </ol>
            
            <h2>Why NexusAI Matters</h2>
            <ul>
                <li><strong>Increased Efficiency:</strong> Automate tasks and access information quickly, allowing you to focus on more strategic initiatives.</li>
                <li><strong>Enhanced Collaboration:</strong> Foster teamwork by using shared tools that facilitate communication and idea generation.</li>
                <li><strong>Improved Accessibility:</strong> With easy-to-use interfaces, all team members can access the information and tools they need without extensive training.</li>
                <li><strong>Data-Driven Insights:</strong> Leverage AI-powered tools to make informed decisions based on real-time data analysis.</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>NexusAI is more than just a collection of tools; it represents a significant leap forward in how we work and collaborate. By harnessing the power of AI, we can streamline our workflows, enhance creativity, and make data-driven decisions that propel our organization forward.</p>
            
            <p>Explore NexusAI today and discover how you can leverage these innovative tools to optimize your work processes, foster collaboration, and ultimately unlock your full potential.</p>
        `
            
        },
        "post-2": {
            id: "post-2",
            title: "Top AI Trends to Watch in 2025", // Card 2 title
            imageSrc: "Component 14.jpg", // Image for card 2
            tag: "AI Trends",
         // Example views for card 2
            fullContent: `
        <p>As we look toward 2025, artificial intelligence (AI) continues to make significant strides across various sectors, driving innovations that enhance efficiency, improve decision-making, and revolutionize user experiences. This year is set to be pivotal for AI evolution, with several emerging trends poised to reshape the landscape. Here are some of the key trends to watch for in 2025.</p>
        
        <h2>Trend #1: Multimodal AI: Unleashing the Power of Context</h2>
        <p>Imagine a world where AI can understand and analyze information from various sources—including text, images, video, and audio. This is the transformative potential of multimodal AI. In 2025, multimodal learning will drive adoption by enabling agencies to analyze local and state-level data while integrating it with external datasets from sources like Google Earth Engine, Google Maps, Waze, and public data. This powerful combination will enhance decision-making, prepare for climate-related risks, and improve public infrastructure.</p>
        <p>For example, Google AI empowers the Hawaii Department of Transportation (HDOT) to address climate challenges by leveraging Google Earth Engine and Google Cloud to deploy a Climate Resilience Platform. This allows them to assess risk and prioritize investment decisions based on multiple climate factors, asset conditions, and community impacts.</p>
        
        <h2>Trend #2: AI Agents: The Evolution from Chatbots to Multi-Agent Systems</h2>
        <p>We've moved from simple chatbots to sophisticated AI agents capable of handling complex tasks. These agents can reason, plan, and learn from their interactions. In 2025, AI agents will help government employees work more efficiently, manage applications, gain deeper data insights, identify security threats, and bring their best ideas to fruition.</p>
        <p>Sullivan County, NY, utilizes virtual agents powered by Google AI to serve citizens faster and more effectively, 24/7. This innovative approach supports citizen engagement beyond traditional work hours while freeing government workers to concentrate on strategic initiatives.</p>
        
        <h2>Trend #3: Assistive Search: The Next Frontier for Knowledge Work</h2>
        <p>AI is transforming how we access and understand information. In 2025, generative AI will enhance the accuracy and efficiency of searching vast datasets. By investing in semantic search, automated metadata tools, and advanced document transcription, agencies will unlock the true value of their data, making it more accessible and actionable.</p>
        <p>The Air Force Research Laboratory (AFRL) exemplifies this trend by leveraging Google Cloud’s advanced AI and machine learning capabilities to address complex challenges across a range of fields, including materials science, bioinformatics, and human performance optimization.</p>
        
        <h2>Trend #4: AI-Powered Constituent Experience: Seamless and Personalized</h2>
        <p>In 2025, AI will significantly enhance citizen experiences. AI-powered tools will facilitate easier navigation of government websites and services, such as applying for permits and licenses in multiple languages, available around the clock.</p>
        <p>For instance, the Wisconsin Department of Workforce Development (DWD) collaborated with Google AI to scale the state’s response to unemployment insurance claims, speeding up overall response times and effectively screening out fraudulent claims to ensure financial assistance reaches genuine recipients.</p>
        
        <h2>Trend #5: Security Gets Tighter—And Tougher—with AI</h2>
        <p>As AI becomes increasingly integrated into government services, so do the security challenges it introduces. However, AI also serves as a powerful tool for enhancing security. In 2025, automating threat detection, analyzing large datasets, and rapidly responding to incidents will be critical for protecting government systems and sensitive information.</p>
        <p>For example, New York City experiences around 90 billion cyber events each week. “We have to distill those 90 billion events down to less than 50 or 60 things we look at. We couldn’t do that without a lot of artificial intelligence and automated decision-making tools," explains Matthew Fraser, Chief Technology Officer of New York City.</p>

        <h2>The Opportunity Ahead</h2>
        <p>Across the public sector, there is a groundswell of enthusiasm for AI, with agencies harnessing its capabilities to enhance efficiency, improve decision-making, and better serve their constituents. In the future, we can expect agencies to appoint dedicated AI leaders who will drive governance, build public trust, and invest in effective workforce strategies that prioritize both AI advancements and security. These efforts are crucial for the responsible and secure development and deployment of AI across all levels of government.</p>

        <p>As we embrace the future of AI in 2025, it will be essential to stay informed and adaptable, ensuring that these advancements deliver meaningful benefits to society.</p>
    `
        },
        "post-3": {
             id: "post-3", // *** NOTE: You had post-2 twice in HTML for card 3, changing ID here to post-3 ***
             title: "Maximizing Data Security with NexusAI", // Card 3 title
             imageSrc: "Component 13.jpg", // Image for card 3
             tag: "Security",
              // Example views for card 3
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
    

    // Selectors for the new blog post detail elements
    const blogPostDetailSection = document.getElementById('blog-post-detail');
    const blogListSection = document.getElementById('blogs-content'); // The main blog list view
    const blogPostTitleEl = document.getElementById('blog-post-title');
    const blogPostImageEl = document.querySelector('#blog-post-detail .blog-post-image img');
    const blogPostTagEl = document.querySelector('#blog-post-detail .blog-post-header .tag');
    const blogPostViewsEl = document.getElementById('blog-post-views');
    const blogPostBodyEl = document.getElementById('blog-post-body');
    const backToBlogsBtn = document.querySelector('.back-to-blogs-btn');
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
