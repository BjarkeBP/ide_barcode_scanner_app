import ShopItem from "../comps/shopItem";
import List from "../comps/list";
import CocaCoal from "../asset/CocaCoal.png";
import FaxeKondiBooster from "../asset/FaxeKondiBooster.png";
import Doritos from "../asset/Doritos.png";
import TuborgClassic from "../asset/TuborgClassic.png";
import Mms from "../asset/Mms.png";
import ZalandoGavekort from "../asset/ZalandoGavekort.png";

export default function ShopPage() {
  const testData = [
    { name: "Coca Coal", cost: 10, picturePath: CocaCoal },
    { name: "Faxe Kondi Booster", cost: 20, picturePath: FaxeKondiBooster },
    { name: "Doritos", cost: 15, picturePath: Doritos },
    { name: "Tuborg Classic", cost: 20, picturePath: TuborgClassic },
    { name: "m&ms", cost: 40, picturePath: Mms },
    { name: "Zalando Gavekort", cost: 2000, picturePath: ZalandoGavekort },
  ];

  return (
    <div className="flex justify-center items-center mt-16">
      <List listOfItems={testData}>
        <ShopItem />
      </List>
    </div>
  );
}
