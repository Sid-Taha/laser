function MyPage() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <video 
          className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover" 
          controls
        >
          <source src="/wood&acrylic.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
  
  export default MyPage;
  