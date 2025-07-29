import { ExternalLink, Activity } from "lucide-react";

const StravaLink = ({
  profileUrl = "https://www.strava.com/athletes/3995572",
  showStats = true,
}) => {
  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="bg-orange-500/10 p-2 rounded-lg">
            <Activity className="w-6 h-6 text-orange-500" />
          </div>
          <div>
            <h3 className="text-white font-medium">Strava</h3>
            <p className="text-gray-400 text-sm">Fitness Tracking</p>
          </div>
        </div>
        <ExternalLink className="w-4 h-4 text-gray-500" />
      </div>

      {showStats && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-2xl font-light text-white">100+</div>
            <div className="text-xs text-gray-500 tracking-wide">
              ACTIVITIES
            </div>
          </div>
          <div>
            <div className="text-2xl font-light text-white">1.4K</div>
            <div className="text-xs text-gray-500 tracking-wide">
              KM THIS YEAR
            </div>
          </div>
        </div>
      )}

      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center py-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide"
      >
        VIEW PROFILE
      </a>
    </div>
  );

  return null;
};

export default StravaLink;
