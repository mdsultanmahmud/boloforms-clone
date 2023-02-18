import React from 'react';
import comment_img from '../../assets/comment.jpeg'
const Comment = () => {
    return (
        <div className='bg-[#915bff] p-4 min-h-[500px] flex items-center'>
            <div className='w-3/4 mx-auto text-center'>
                <q className='text-white text-xl'>Boloforms has completely revolutionized our form approval process. It is incredibly easy to use and simple to set up, saving us countless hours of work. We can now easily manage all of our form approvals, assign tasks to different team members and track progress all in one place. Boloforms is a must-have for any business looking for an efficient Form Approval Workflow Software!</q>
                <br />
                <div className="rating my-8">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                </div>
                <div className='flex items-center justify-center mt-5'>
                    <img src={comment_img} className="h-[100px] w-[100px] rounded-full mr-4 border-2 border-white" alt="" />
                    <div className='text-start'>
                        <h3 className='text-white'>Patrick Nyama,</h3>
                        <p className='text-white'>Edmonton CA</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment; 