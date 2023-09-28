import React, { useState } from 'react';

function Content() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: '',
        contactNumber: '',
        tellUs: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to a server)
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="text-white flex flex-col md:flex-row items-center" >
            <div className="text-center md:text-left md:pr-4">
                <p className="text-xl md:text-2xl lg:text-4xl" style={{ maxWidth: '595px', marginLeft: 30 }}>
                    Searching for Augmented Development Teams to steer your product towards triumph?
                </p>
                <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-8 md:gap-16">
                    <div className="ml-6 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3">50+</h1>
                        <p className="text-gray-500">Clients</p>
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3">80+</h1>
                        <p className="text-gray-500" style={{ maxWidth: "160px" }}>Projects successfully completed</p>
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3">60%</h1>
                        <p className="text-gray-500" style={{ maxWidth: "236px" }}>of the clients converted into long term engagement partners</p>
                    </div>
                </div>


            </div>
            <div className="bg-gradient-to-b from-gray-300 to-gray-600 p-8 rounded-lg mt-4 md:mt-0 mx-auto max-w-lg" style={{ marginTop: 40, marginBottom: 40 }}>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="border rounded-lg px-3 py-2 w-full"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="border rounded-lg px-3 py-2 w-full"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="country" className="block text-gray-700 font-medium">Country</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            className="border rounded-lg px-3 py-2 w-full"
                            value={formData.country}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="contactNumber" className="block text-gray-700 font-medium">Contact Number</label>
                        <input
                            type="tel"
                            id="contactNumber"
                            name="contactNumber"
                            className="border rounded-lg px-3 py-2 w-full"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4 col-span-2">
                        <label htmlFor="tellUs" className="block text-gray-700 font-medium">Tell Us</label>
                        <textarea
                            id="tellUs"
                            name="tellUs"
                            rows="4"
                            className="border rounded-lg px-3 py-2 w-full"
                            value={formData.tellUs}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="text-center col-span-2">
                        <button
                            type="submit"
                            className="bg-black text-white px-4 py-2 rounded-full hover:bg-white hover:text-black"
                        >
                            Submit
                        </button>

                    </div>
                </form>
            </div>
        </div >
    );
}

export default Content;
