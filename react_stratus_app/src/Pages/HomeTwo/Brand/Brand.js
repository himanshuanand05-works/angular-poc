import React from 'react';


const Brand = () => {

    const brandData = [
        {
          id: 1,
          title: 'Marketing',
        },
        {
          id: 2,
          title: 'Advertising',
        },
        {
          id: 3,
          title: 'Digital',
        },
        {
          id: 4,
          title: 'Account',
        },
        {
          id: 5,
          title: 'SEO Marketing',
        },
        {
          id: 6,
          title: 'Marketing',
        },
        {
          id: 7,
          title: 'Advertising',
        },
      ];
 
    return (
        <div className="brand__section_two p_relative">
            <div className="feature-three__wrap">
                <ul className="list-unstyled feature-three__list">
                    {brandData.map((item, id)=>(
                        <li key={id}>
                            <div className="feature-three__title-box">
                                <h2 className="feature-three__title"> <span>*</span> {item.title} </h2>
                            </div>
                        </li>
                            
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Brand;