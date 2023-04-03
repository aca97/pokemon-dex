const BaseStatsSection = ({ stats }: any) => {
  return (
    <div>
      {stats.map((stat: any, index: number) => {
        const percentage = stat.base_stat;
        return (
          <div key={index} className="stat-item">
            <div className="stat-label">{stat.stat.name}</div>
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
