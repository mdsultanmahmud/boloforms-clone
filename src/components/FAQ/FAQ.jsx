import React from 'react';

const FAQ = () => {
    return (
        <div className='m-4'>
            <h1 className='text-center font-bold text-4xl text-black my-3'>Frequently Asked Questions</h1>
            <div className='p-2 my-4 grid gap-5 grid-cols-1 lg:grid-cols-2 text-black'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is the difference between email and request?
                    </div>
                    <div className="collapse-content">
                        <p>A request needs to send multiple emails to different recipients and respondent (optional) for approval. This means that one request may costs lots of email quota.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How to calculate the number of requests based on email quota?
                    </div>
                    <div className="collapse-content">
                        <p>Emails & Requests are different. For examples, if you set up a workflow with 2 recipients, a form respondent submit a request then 2 emails counted to be sent to 2 recipients. In average, a request from our users consists of 4 emails. That is why free plan (500 emails) is calculated to be approximately 125 requests per month. The smaller number of recipient you set up in the workflow, the more request you have with a fixed email quota and vice versa.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What will happen if I run out of email quota?
                    </div>
                    <div className="collapse-content">
                        <p>When you run out of email quota, the addon will temporary stop running. You will have to wait for quota renewal to send email again. If you are Free user, you can purchase Individual Plan and enjoy much higher quotas (at least 5000 emails/month) and unlimited emails sent per day.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Why the addon requires access to my Google Drive?
                    </div>
                    <div className="collapse-content">
                        <p>Permission to Google Drive is only necessary for the addon to perform actions related to your connected Google Form and spreadsheet on your behalf. In no circumstance that we will use those files for any other purposes or sharing to third parties.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What will happen to my data if I cancel my subscription?
                    </div>
                    <div className="collapse-content">
                        <p>You data will still be stored in our database even after your subscription cancellation. If you want to remove your data, please contact to us via support@boloforms.com.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How does approval workflow feature work?
                    </div>
                    <div className="collapse-content">
                        <p>When a Form Respondent sends a request, the addon will automatically send approval notification email to your specified recipient(s). Recipient can make One-click approve/reject decision on email, or, approve/reject & comment on BoloForms Approvals website. Finally, an email will be sent to all recipients notifying the final result.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        I receive a permission error when I try to setup the Add-on
                    </div>
                    <div className="collapse-content">
                        <p>This is a known issue with Google permissions and it happens when you are logged in with more than one Google account. Try to sign out of all account except your main account. Alternatively, try Guest/Incognito mode.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Does recipient need Google Account?
                    </div>
                    <div className="collapse-content">
                        <p>No. Recipients do not need Google account. They also do not need to have access to your Google Form or spreadsheet. When a request is sent, recipient will receive an email which includes: One-click Approve & One-click Reject button: to approve/reject immediately. Approve/Reject & Comment button: to open BoloForms Website where you can approve/reject & give comment on the request.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How many recipients can I add?
                    </div>
                    <div className="collapse-content">
                        <p>There is no limit to the number of recipients. However, be aware that the higher number of recipients is, the quicker your emails quota may run out.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How can I contact support?
                    </div>
                    <div className="collapse-content">
                        <p>For any additional questions, you can contact us on support@boloforms.com or on WhatsApp at +91-8830631677 anytime.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Can Form Respondent or Recipients edit a form submission?
                    </div>
                    <div className="collapse-content">
                        <p>You can have option to allow Form Respondents to edit their own submission. However, Recipients can not edit submissions from Respondent.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Why does the approval workflow sometimes work smoothly and other times throws errors?
                    </div>
                    <div className="collapse-content">
                        <p>If you suddenly have an error running when using an add-on, please let us know by sending an email to support@boloforms.com. Our team will contact you as soon as possible to look into the issue. If you need an expedited support, feel free to message us on WhatsApp at +91-8830631677.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;