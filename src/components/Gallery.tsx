import { Play, X, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';

interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  title: string;
  description: string;
}

export function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1559223694-98ed5e272fef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwc3BlYWtpbmclMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzY1Njk1MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Tech Conference 2024',
      description: 'Speaking at the Annual Web Development Summit'
    },
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1603575448360-153f093fd0b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjBsYXB0b3B8ZW58MXx8fHwxNzY1NjI0MTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Coding Tutorial: React Hooks',
      description: 'Complete guide to mastering React Hooks'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1555209183-8facf96a4349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2UlMjBzZXR1cHxlbnwxfHx8fDE3NjU2MTI4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'My Workspace Setup',
      description: 'A peek into my daily development environment'
    },
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRlYWNoaW5nJTIwY29kaW5nfGVufDF8fHx8MTc2NTY5NTM5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Workshop: Building Full Stack Apps',
      description: 'Teaching modern web development techniques'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1633118948215-480c9d78fc24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NjU1OTM2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Team Collaboration',
      description: 'Working with amazing developers on exciting projects'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1706759755789-66d39fd252b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZXZlbnQlMjBuZXR3b3JraW5nfGVufDF8fHx8MTc2NTY5NTM5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Tech Meetup',
      description: 'Networking with fellow developers and tech enthusiasts'
    }
  ];

  return (
    <section id="gallery" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-red-500 mb-4">Gallery</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A collection of moments, presentations, and behind-the-scenes from my journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group relative aspect-video bg-slate-800 border border-slate-700 rounded-xl overflow-hidden cursor-pointer hover:border-red-500 transition-all"
              onClick={() => setSelectedItem(item)}
            >
              <img 
                src={item.type === 'video' ? item.thumbnail : item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Type Indicator */}
              <div className="absolute top-3 right-3">
                <div className="w-8 h-8 bg-slate-900/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  {item.type === 'video' ? (
                    <Play size={16} className="text-red-500 fill-red-500" />
                  ) : (
                    <ImageIcon size={16} className="text-red-500" />
                  )}
                </div>
              </div>

              {/* Play Button for Videos */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={28} className="text-white fill-white ml-1" />
                  </div>
                </div>
              )}

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <h4 className="mb-1">{item.title}</h4>
                <p className="text-slate-300 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Viewing Full Image/Video */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelectedItem(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:border-red-500 transition-colors"
            onClick={() => setSelectedItem(null)}
          >
            <X size={20} className="text-white" />
          </button>

          <div 
            className="max-w-5xl w-full bg-slate-800 border border-slate-700 rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === 'video' ? (
              <div className="aspect-video">
                <iframe
                  src={selectedItem.src}
                  title={selectedItem.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <img 
                src={selectedItem.src}
                alt={selectedItem.title}
                className="w-full h-auto"
              />
            )}
            <div className="p-6">
              <h3 className="mb-2">{selectedItem.title}</h3>
              <p className="text-slate-400">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
