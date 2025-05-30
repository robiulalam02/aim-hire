import React from 'react';

const Post = ({ posts }) => {
    return (
        <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font">{posts.category}</span>
                <span class="mt-1 text-gray-500 text-sm">{posts.date}</span>
            </div>
            <div class="md:flex-grow">
                <h2 class="text-2xl font-medium title-font mb-2">{posts.heading}</h2>
                <p class="leading-relaxed">{posts.description}</p>
                <a class="text-indigo-500 inline-flex items-center mt-4">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Post;