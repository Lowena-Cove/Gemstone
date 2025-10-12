import { ButtonItem, PanelSection } from "@decky/ui";

const Services = () => {
  const streamingServices = [
    { name: "Prime Video", url: "https://www.primevideo.com", logo: "assets/streaminglogos/PRIME.jpg" },
    { name: "Netflix", url: "https://www.netflix.com", logo: "assets/streaminglogos/NETFLIX.jpg" },
    { name: "Disney+", url: "https://www.disneyplus.com", logo: "assets/streaminglogos/DISNEY+.png" },
    { name: "YouTube", url: "https://www.youtube.com", logo: "assets/streaminglogos/YOUTUBE.jpg" },
    { name: "ITV", url: "https://www.itv.com", logo: "assets/streaminglogos/ITV.png" },
  ];

  const cloudGamingServices = [
    { name: "Xbox Cloud Gaming", url: "https://www.xbox.com/play", logo: "assets/streaminglogos/XBOX_CLOUD.png" },
    { name: "GeForce Now", url: "https://play.geforcenow.com", logo: "assets/streaminglogos/GEFORCE_NOW.png" },
    { name: "PlayStation Plus", url: "https://www.playstation.com/en-us/ps-plus/", logo: "assets/streaminglogos/PLAYSTATION_NOW.png" },
  ];

  const openService = (url: string) => {
    // Logic to open the service in an embedded view
    window.open(url, "_self"); // Opens in the same window
  };

  return (
    <>
      <PanelSection title="Cloud Gaming">
        {cloudGamingServices.map(service => (
          <ButtonItem
            key={service.name}
            layout="below"
            onClick={() => openService(service.url)}
          >
            <img src={service.logo} style={{ borderRadius: '10px', filter: 'brightness(1.1)' }} alt={service.name} />
            {service.name}
          </ButtonItem>
        ))}
      </PanelSection>
      <PanelSection title="Movies and TV">
        {streamingServices.map(service => (
          <ButtonItem
            key={service.name}
            layout="below"
            onClick={() => openService(service.url)}
          >
            <img src={service.logo} style={{ borderRadius: '10px', filter: 'brightness(1.1)' }} alt={service.name} />
            {service.name}
          </ButtonItem>
        ))}
      </PanelSection>
    </>
  );
};

export default Services;