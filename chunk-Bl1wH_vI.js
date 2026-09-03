import{S as Bc}from"./chunk-EuE8pMiM.js";import{It as Zu,gn}from"./chunk-CdnBzqbo.js";var r=`/api/staff/v1/guests`;async function C(t){let s=gn({q:t});return(await Bc(`${r}${t?`?`+s:``}`)).map(c=>new Zu(c))}async function I(t){return new Zu(await Bc(`${r}/${encodeURIComponent(t)}`))}export{I as n,C as t};
//# debugId=f37af534-55f6-5c3d-ab57-64a696d7f730
//# sourceMappingURL=chunk-Bl1wH_vI.js.map