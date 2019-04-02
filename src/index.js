import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider, addLocaleData} from 'react-intl';
import esLocaleData from 'react-intl/locale-data/es';
import localeEnMessages from "./locales/en";
import localeEsMessages from "./locales/es";
import JobsList from "./components/jobsList";

addLocaleData(esLocaleData);

function lenguaSelector(){
   if (window.navigator.language.startsWith("es")) {
        return (localeEsMessages);
   }else{
        return localeEnMessages;
   }

}

ReactDOM.render(
	<IntlProvider locale={window.navigator.language} messages= {lenguaSelector()}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);

