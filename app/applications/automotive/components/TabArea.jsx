import "./../automotive.scss";

export const TabArea = ({ tab, setTab, tabs }) => {
  return (
    <div className={`top-box ${tab == "interior" ? "isWhite" : ""}`}>
      <div className="title-area">
        <p className="title">Applicated Product</p>
        <p className="sub-title">
          자동차 내부의 디스플레이 시스템에서 중요한 역할을 하며, 우수한 성능과
          신뢰성을 제공하여 운전자들에게 탁월한 시각적 경험을 제공합니다.
        </p>
      </div>
      <div className={`tab-area `}>
        {tabs.map((item) => {
          const isActive = tab === item.key;
          return (
            <div
              className={`tab ${isActive ? "active" : ""} `}
              key={item.key}
              onClick={() => {
                setTab(item.key);
              }}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};
