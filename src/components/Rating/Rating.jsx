import React from 'react';

const Rating = ({ content }) => {
    const { img, name, text } = content
    return (
        <div className='my-8 p-4'>
            <div className="card card-side bg-base-100 text-black shadow-xl p-8 z-0">
                <figure><img src={img} className="rounded-full w-[120px] h-[120px]" alt="Movie" /></figure>
                <div className="card-body">
                    <div className="rating rating-md">
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                    <q className='font-semibold text-xl'>{text}</q>
                    <p className='font-bold text-xl'>{name}</p>
                </div>
            </div>
        </div>
    );
};

export default Rating;