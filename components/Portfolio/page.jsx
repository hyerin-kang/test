import "./portfolio.scss";
import Counter from "./../Counter/page";

export default function Portfolio() {
  const amountData = {
    data: {
      patentCount: 18000,
    },
  };

  const winningData = {
    data: {
      winCount: 700,
    },
  };
  return (
    <div className="portfolio">
      <div className="title-area">
        <h1 className="title">Patent Portfolio</h1>
        <p className="sub-title">
          18,000개 이상의 특허는 칩에서 애플리케이션에 이르기까지 광범위하게
          적용됩니다.​ 서울반도체 제품이 적용된 애플리케이션은 전 세계에서
          보호됩니다.
        </p>
      </div>
      <div className="number-area">
        <div>
          US6007209 US7964478 US9318529 US6473554 US7964880 US9318530 US6647199
          US7977691 US9324919 US7674019 US7982210 US9324921 US7748873 US7994539
          US9343627 US7901113 US7999271 US9343644 US8360592 US8039280 US9349912
          US8602605 US8049229 US9356167 US8992053 US8054002 US9356187 US9255695
          US8067778 US9356198 US9022618 US8076688 US9356212 US9484510 US8089074
          US9362458 US9121555 US8093583 US9368548 US9507204 US8129917 US9373496
          US7964943 US8168988 US9397264 US8120054 US8173459 US9397269 US8138512
          US8183072 US9401456 US8319248 US8183592 US9412922 US8558270 US8188489
          US9419180 US8659050 US8188687 US9445462 US8692282 US8189635 US9449815
          US8823041 US8198643 US9450141 US8829552 US8232562 US9450153 US8860068
          US8232565 US9450159 US8994061 US8247244 US9461091 US8963196 US8247792
          US9461212 US9412924 US8269228 US9466761 US9172020 US8274089 US9478690
          US9147821 US8283682 US9490403 US9224935 US8294171 US9515121 US6007209
          US8294386 US9520534 US6473554 US8299476 US9520536 US7906789 US8309971
          US9520543 US9203006 US8314440 US9520546 US8168988 US8323999 US9536924
          US9450155 US8330173 US9537045 US7497973 US8338836 US9543476 US7847309
          US8339059 US9543488 US7358542 US8350276 US9548425 US7453195 US8350279
          US7982207 US7648649 US8354680 US6610606 US9885458 US8373188 US6942731
          US9880417 US8383433 US8084774 US9929330 US8384098 US9716210 US7618162
          US8390002 US9865775 US8132952 US8395332 US9905729 US8608328 US8436369
        </div>

        <div className="case-count">
          <div className="amount-data">
            <p>Amount of Patents</p>
            <div>
              {amountData.data.patentCount ? (
                <Counter
                  start={0}
                  end={amountData.data.patentCount}
                  duration={2000}
                />
              ) : (
                0
              )}
            </div>
          </div>
          <div className="winning-data">
            <p>Winning Cases</p>
            <div>
              {winningData.data.winCount ? (
                <Counter
                  start={0}
                  end={winningData.data.winCount}
                  duration={2000}
                />
              ) : (
                0
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
