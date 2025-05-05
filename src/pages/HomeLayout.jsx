import React from 'react';
import How_it_works from '../components/How_it_works/How_it_works';
import All_Companies from '../components/Company/All_Companies';

const HomeLayout = () => {
    return (
        <div>
            <section>
                <How_it_works></How_it_works>
            </section>
            <section>
                <All_Companies></All_Companies>
            </section>
        </div>
    );
};

export default HomeLayout;