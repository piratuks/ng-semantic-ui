import de from "./de";
import enAU from "./en-AU";
import enGB from "./en-GB";
import enUS from "./en-US";
import es from "./es";
import fr from "./fr";
import pt from "./pt";
import it from "./it";
import ru from "./ru";
import he from "./he";
import ge from "./ge";
import nl from "./nl";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [],
  providers: [],
})
export class LocalesModule {
  public languages: any = {
    de: de,
    enAU: enAU,
    enGB: enGB,
    enUS: enUS,
    es: es,
    it: it,
    fr: fr,
    pt: pt,
    ru: ru,
    he: he,
    ge: ge,
    nl: nl,
  };
}
