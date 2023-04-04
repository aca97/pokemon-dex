const BaseStatsSection = ({ stats }: any) => {
  return (
    <div>
      {stats.map((stat: any, index: number) => {
        const percentage = stat.base_stat;
        let statLabel = stat.stat.name;
        if (statLabel === "special-attack") {
          statLabel = "sp. atk.";
        } else if (statLabel === "special-defense") {
          statLabel = "sp. def.";
        }
        return (
          <div key={index} className="stat-item">
            <div className="stat-label">{statLabel}</div>
            <div className="stat-value">{stat.base_stat}</div>
            <div className="status-bar">
              <div className="filled" style={{ width: `${percentage}%` }}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BaseStatsSection;
