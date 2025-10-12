# Cloud Gaming Services Integration

This document describes the implementation of cloud gaming services in the Gemstone Decky plugin.

## Implemented Services

### 1. Xbox Cloud Gaming
- **URL**: https://www.xbox.com/play
- **Implementation**: Direct web integration
- **Status**: ✅ Ready to use
- **Notes**: Works seamlessly as a web-based service, similar to how Steam loads its store pages

### 2. GeForce Now
- **URL**: https://play.geforcenow.com
- **Implementation**: Direct web integration
- **Status**: ✅ Ready to use
- **Notes**: Works seamlessly as a web-based service, similar to how Steam loads its store pages

### 3. PlayStation Plus (formerly PlayStation Now)
- **URL**: https://www.playstation.com/en-us/ps-plus/
- **Implementation**: Basic web integration
- **Status**: ⚠️ Limited functionality
- **Notes**: 
  - PlayStation's cloud gaming service is more complex than the others
  - The referenced PS-Now-Electron repo (https://github.com/kurobeats/PS-Now-Electron) contains more advanced integration methods
  - Current implementation provides basic access to PlayStation Plus page
  - For full functionality, additional work would be needed to integrate the Electron-based solution

## Technical Implementation

The cloud gaming services are integrated into the existing Gemstone plugin structure:

1. **Services Array**: Added `cloudGamingServices` array alongside existing `streamingServices`
2. **UI Layout**: Cloud gaming services appear in their own "Cloud Gaming" section above the "Movies and TV" section
3. **Logo Assets**: Placeholder logo files created in `assets/streaminglogos/` directory
4. **Navigation**: Uses the same `openService()` function to open services in the current window

## File Structure

```
src/
├── Services.tsx          # Main component with both streaming and cloud gaming services
└── index.tsx            # Plugin entry point

assets/streaminglogos/
├── XBOX_CLOUD.png       # Xbox Cloud Gaming logo (placeholder)
├── GEFORCE_NOW.png      # GeForce Now logo (placeholder)
└── PLAYSTATION_NOW.png  # PlayStation Plus logo (placeholder)
```

## Future Enhancements

1. **Real Logo Assets**: Replace placeholder logo files with actual service logos
2. **PlayStation Integration**: Implement more sophisticated PlayStation cloud gaming integration using the PS-Now-Electron approach
3. **Service Detection**: Add logic to detect if services are available/accessible
4. **Custom Embedded Views**: Implement custom embedded views instead of opening in the same window
5. **Service Status**: Add indicators for service availability and user authentication status

## Usage

Users can access cloud gaming services through the Gemstone plugin interface:
1. Open the Gemstone plugin from the Decky menu
2. Navigate to the "Cloud Gaming" section
3. Click on any service to launch it in the current window

The integration follows the same pattern as existing streaming services, making it familiar and easy to use.