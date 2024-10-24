import React, { useState } from "react";
import images from "../../assets/login.png";
import close from "../../assets/close.png";
import Sidebar from "../elements/sidebar/Sidebar";

interface AnimeProp {
  children: React.ReactNode;
}

const CreateAnimeLayout = (props: AnimeProp) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex h-screen">
      <Sidebar></Sidebar>
      <div className="w-4/5" style={{ backgroundColor: "#1B1919" }}>
        <div className="p-8 text-white">
          <h1 className="text-3xl font-bold">Add Anime</h1>
          <div className="flex justify-end">
            <button className="p-2 border-2 rounded-lg" onClick={handleOpen}>
              + Add Anime
            </button>
          </div>
          
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div style={{backgroundColor: '#f7f5f2'}} className="flex flex-col w-full max-w-2xl overflow-hidden bg-white rounded-lg shadow-lg">
                <div>
                  <div style={{backgroundColor: '#EA4C88'}} className="flex items-center justify-between p-4 text-xl font-bold text-white">
                    Fill The Form
                    <img src={close} alt="" className="w-10 cursor-pointer" onClick={handleClose}/>
                  </div>
                </div>
                <div className="flex p-6 ml-8 space-x-6">
                  <ImageInput></ImageInput>
                  <div className="w-2/3">
                    {children}
                  </div>
                </div>
                <div className="flex justify-end p-4 border-t">
                  <button style={{backgroundColor: '#EA4C88', }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#cc3b72')} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EA4C88")} className="px-4 py-2 text-white transition rounded-lg"> Add </button>
                </div>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

const ImageInput = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]){
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      }
      
      reader.readAsDataURL(file);
    }
  }

  const triggerFileSelect = () => {
    const fileInput = document.getElementById("file-input");
      if (fileInput) {
        fileInput.click();
      }
  };
    
  return (
    <div className="flex items-center justify-center w-1/3">
      <input id="file-input" type="file" style={{display: "none"}} accept="image/*" onChange={handleImageChange}/>
      <img src={selectedImage || images} alt="Form Image" className="rounded-lg shadow-lg" onClick={triggerFileSelect} />   
    </div>
  )
}

export default CreateAnimeLayout;
