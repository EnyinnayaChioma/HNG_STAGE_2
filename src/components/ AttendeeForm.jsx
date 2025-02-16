import  { useState, useEffect } from 'react';
import "../styles/AttendeeForm.css";
import logo from "../assets/logo.svg";
import logoText from "../assets/logoText.svg";
import {useNavigate} from "react-router"

const AttendeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    specialRequest: '',
    profileImage: null
  });
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [isUploading, setIsUploading] = useState(false);

  // Load saved form data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('attendeeFormData');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setFormData(prev => ({
        ...prev,
        name: parsed.name || '',
        email: parsed.email || '',
        specialRequest: parsed.specialRequest || ''
      }));
      
      // Load saved image preview if it exists
      if (parsed.profileImageData) {
        setPreview(parsed.profileImageData);
      }
    }
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('attendeeFormData', JSON.stringify({
      name: formData.name,
      email: formData.email,
      specialRequest: formData.specialRequest,
      profileImageData: preview // Store the image data URL
    }));
  }, [formData.name, formData.email, formData.specialRequest, preview]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!preview) {
      newErrors.profileImage = 'Profile image is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleImageDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer?.files[0] || e.target.files[0];
    
    if (file) {
      if (file.type.startsWith('image/')) {
        setFormData(prev => ({
          ...prev,
          profileImage: file
        }));
        
        // Create preview URL and store in localStorage
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
        
        // Clear error
        setErrors(prev => ({
          ...prev,
          profileImage: ''
        }));
      } else {
        setErrors(prev => ({
          ...prev,
          profileImage: 'Please upload an image file'
        }));
      }
    }

  };



  /* Cloudinary upload function (commented out for future use)
  const uploadToCloudinary = async (file) => {
    const cloudName = 'YOUR_CLOUD_NAME';
    const uploadPreset = 'YOUR_UPLOAD_PRESET';

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    try {
      setIsUploading(true);
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: 'POST',
          body: formData
        }
      );
      
      const data = await response.json();
      setIsUploading(false);
      return data.secure_url;
    } catch (error) {
      setIsUploading(false);
      throw new Error('Failed to upload image');
    }
  };
  */

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        // Instead of uploading to Cloudinary, we'll just use the local preview
        console.log('Form submitted:', { 
          name: formData.name,
          email: formData.email,
          specialRequest: formData.specialRequest,
          profileImage: preview 
        });
        // Handle successful submission
      } catch (error) {
        setErrors(prev => ({
          ...prev,
          submit: 'Failed to submit form. Please try again.'
        }));
      }
    }
    navigate("/ticket")
  };

  return (
    <div>
      <div className="container">
        <div className="holder">
          <header className="header">
            <nav>
              <div>
                <img src={logo} alt="ticketlogo" />
                <img src={logoText} alt="ticketlogotext" className="logotext" />
              </div>
              <div className="list">
                <ul>
                  <li>Events</li>
                  <li>My Tickets</li>
                  <li>About </li>
                  <li>Project</li>
                </ul>
              </div>
              <div>
                <button className="navButton">My Tickets</button>
              </div>
            </nav>
          </header>

          <main>
            <section>
              <div className="ticketTitle">
                <h3>Attendee Details</h3>
                <p>step2/3</p>
              </div>
              <div className="progressBar">
                <div></div>
              </div>
            </section>
            
            <section className="uploadHolder">
              <div>
                <p className="upload">Upload profile picture</p>
                <div className="innerboxholder" onDrop={handleImageDrop} onDragOver={(e) => e.preventDefault()}>
  <div className="innerbox">
    {preview && <img src={preview} alt="Preview" />}
    <div className="lightbox" style={{ display: preview ? "none" : "flex" }}>
      <input type="file" accept="image/*" onChange={handleImageDrop} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
      <p>Drag & drop or click to upload</p>
    </div>
  </div>
  {errors.profileImage && <p className="text-red-500 text-sm mt-1">{errors.profileImage}</p>}
</div>

              </div>
            </section>

            <section>
              <form onSubmit={handleSubmit}>
                <div className="nameLabel">
                  <label htmlFor="name">Enter your name</label>
                </div>
                <div className="inputHolder">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g Cynosure Enyinnaya"
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="emailLabel">
                  <label htmlFor="email">Enter your email *</label>
                </div>
                <div className="inputHolder">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g: cynosureenyinnaya@gmail.com"
                    className={errors.email ? 'error' : ''}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="textLabel">
                  <label htmlFor="specialRequest">Special request?</label>
                </div>
                <div className="textHolder">
                  <textarea
                    name="specialRequest"
                    id="specialRequest"
                    value={formData.specialRequest}
                    onChange={handleInputChange}
                    placeholder="Ask anything"
                  ></textarea>
                </div>
              </form>
            </section>
            
            <div className="buttonHolder">
              <button type="button" onClick={() => window.history.back()}>
                Cancel
              </button>
              <button 
                type="submit"
                onClick={handleSubmit}
              >
                Next
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AttendeeForm;