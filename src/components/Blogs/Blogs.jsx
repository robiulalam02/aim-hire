import React from 'react';
import { useLoaderData } from 'react-router';
import Post from './Post';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
    const data = useLoaderData();
    return (
        <section class="text-gray-600 body-font overflow-hidden mb-20 mt-20 md:mt-40">
            <Helmet>
                <title>Blogs</title>
            </Helmet>
            <div class="container px-5 py-24 mx-auto">
                <div class="-my-8 divide-y-2 divide-gray-100 dark:text-white">

                    {
                        data.map((posts, index) => <Post key={index} posts={posts}></Post>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Blogs;