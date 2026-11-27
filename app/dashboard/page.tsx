import profileImage from '../dashboard/placeholder.png';
export default function Dashboard() {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen py-2"
      style={{ background: 'linear-gradient(to right, #080026, #2d295b)' }}>
      <img src={profileImage.src} alt="Profile" className="w-32 h-32 rounded-full mb-4" />
      <h1 className="text-4xl font-bold mb-4">Dashboard Page</h1>
      <p className="text-white text-lg">Welcome to Ruang Berbagi!</p>
      <p 
      className="text-white text-lg"
      style={{ maxWidth: '600px', textAlign: 'justify', marginTop: '20px' }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur assumenda tempore quidem reprehenderit ut odio at mollitia, dolor dignissimos cumque accusamus quasi doloribus sapiente quam natus velit molestias repudiandae qui..
      </p>
    </div>
  );
}
