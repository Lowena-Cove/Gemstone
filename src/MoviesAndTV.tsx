import { ButtonItem, PanelSection } from "@decky/ui";
import { useState } from "react";

const MoviesAndTV = () => {
  const [showRegionalServices, setShowRegionalServices] = useState(true);

  const services: StreamingService[] = [
    { name: "Prime Video", url: "https://www.primevideo.com", logo: "assets/streaminglogos/PRIME.jpg" },
    { name: "Netflix", url: "https://www.netflix.com", logo: "assets/streaminglogos/NETFLIX.jpg" },
    { name: "Disney+", url: "https://www.disneyplus.com", logo: "assets/streaminglogos/DISNEY+.png" },
    { name: "YouTube", url: "https://www.youtube.com/", logo: "assets/streaminglogos/YOUTUBE.jpg" },
    { name: "Apple TV+", url: "https://tv.apple.com", logo: "assets/streaminglogos/APPLE_TV.svg" },
    // UK Services
    { name: "BBC iPlayer", url: "https://www.bbc.co.uk/iplayer", logo: "assets/streaminglogos/BBC_IPLAYER.svg", region: "UK" },
    { name: "ITV", url: "https://www.itv.com", logo: "assets/streaminglogos/ITV.png", region: "UK" },
    // US Services
    { name: "Hulu", url: "https://www.hulu.com", logo: "assets/streaminglogos/HULU.svg", region: "US" },
    { name: "HBO Max", url: "https://www.hbomax.com", logo: "assets/streaminglogos/HBO_MAX.svg", region: "US" },
    { name: "Paramount+", url: "https://www.paramountplus.com", logo: "assets/streaminglogos/PARAMOUNT.svg", region: "US" },
  ];

  // Filter services based on user preference
  const filteredServices = showRegionalServices 
    ? services 
    : services.filter(service => !service.region);

  const openService = (url: string) => {
    // Enhanced logic to open the service in an embedded view
    // This opens the streaming service in the Steam browser overlay
    try {
      // Try to use Steam's browser if available
      if (window.SteamClient && window.SteamClient.Browser) {
        window.SteamClient.Browser.OpenURL(url);
      } else {
        // Fallback to opening in the same window for embedded experience
        window.open(url, "_self");
      }
    } catch (error) {
      console.log("Steam browser not available, using fallback");
      window.open(url, "_self");
    }
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    // Fallback to a generic streaming icon if logo fails to load
    event.currentTarget.style.display = 'none';
  };

  return (
    <PanelSection title="Movies and TV Streaming Services">
      <div style={{ marginBottom: '10px', fontSize: '14px', color: '#8B929A' }}>
        Access your favorite streaming services directly from Steam Deck
      </div>
      
      <ButtonItem
        layout="below"
        onClick={() => setShowRegionalServices(!showRegionalServices)}
        description={`${showRegionalServices ? 'Hide' : 'Show'} regional services (UK/US)`}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ fontSize: '20px' }}>🌍</div>
          <div>
            <div style={{ fontWeight: 'bold' }}>Regional Services</div>
            <div style={{ fontSize: '12px', color: '#8B929A' }}>
              {showRegionalServices ? 'Showing all services' : 'Global services only'}
            </div>
          </div>
        </div>
      </ButtonItem>

      {filteredServices.map(service => (
        <ButtonItem
          key={service.name}
          layout="below"
          onClick={() => openService(service.url)}
          description={service.region ? `Available in ${service.region}` : 'Available globally'}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img 
              src={service.logo} 
              style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '8px', 
                filter: 'brightness(1.1)',
                objectFit: 'cover'
              }} 
              alt={service.name}
              onError={handleImageError}
            />
            <div>
              <div style={{ fontWeight: 'bold' }}>{service.name}</div>
              {service.region && (
                <div style={{ fontSize: '12px', color: '#8B929A' }}>
                  {service.region} Region
                </div>
              )}
            </div>
          </div>
        </ButtonItem>
      ))}
    </PanelSection>
  );
};

export default MoviesAndTV;
