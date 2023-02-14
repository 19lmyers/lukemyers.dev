import{S as T,i as W,s as z,D as A,k as C,l as q,m as O,h as y,n as P,b as S,E as V,F as B,G,f as H,t as L}from"../../chunks/index-7967cd62.js";/* empty css                                       */var N="_1lki3uf0";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(n,s,e){return(1-e)*n+e*s}const R=[95.047,100,108.883];function g(n){return 100*Y((n+16)/116)}function U(){return R}function Y(n){const s=.008856451679035631,e=24389/27,a=n*n*n;return a>s?a:(116*n-16)/e}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=class{constructor(n,s,e,a,o,t,c,h,u,l){this.n=n,this.aw=s,this.nbb=e,this.ncb=a,this.c=o,this.nc=t,this.rgbD=c,this.fl=h,this.fLRoot=u,this.z=l}static make(n=U(),s=200/Math.PI*g(50)/100,e=50,a=2,o=!1){const t=n,c=t[0]*.401288+t[1]*.650173+t[2]*-.051461,h=t[0]*-.250268+t[1]*1.204414+t[2]*.045854,u=t[0]*-.002079+t[1]*.048952+t[2]*.953127,l=.8+a/10,D=l>=.9?$(.59,.69,(l-.9)*10):$(.525,.59,(l-.8)*10);let r=o?1:l*(1-1/3.6*Math.exp((-s-42)/92));r=r>1?1:r<0?0:r;const v=l,_=[r*(100/c)+1-r,r*(100/h)+1-r,r*(100/u)+1-r],b=1/(5*s+1),M=b*b*b*b,k=1-M,f=M*s+.1*k*k*Math.cbrt(5*s),p=g(e)/n[1],F=1.48+Math.sqrt(p),d=.725/Math.pow(p,.2),E=d,i=[Math.pow(f*_[0]*c/100,.42),Math.pow(f*_[1]*h/100,.42),Math.pow(f*_[2]*u/100,.42)],m=[400*i[0]/(i[0]+27.13),400*i[1]/(i[1]+27.13),400*i[2]/(i[2]+27.13)],I=(2*m[0]+m[1]+.05*m[2])*d;return new w(p,I,d,E,D,v,_,f,Math.pow(f,.25),F)}};let j=w;j.DEFAULT=w.make();function J(n){let s,e;const a=n[1].default,o=A(a,n,n[0],null);return{c(){s=C("body"),o&&o.c(),this.h()},l(t){s=q(t,"BODY",{class:!0});var c=O(s);o&&o.l(c),c.forEach(y),this.h()},h(){P(s,"class",N)},m(t,c){S(t,s,c),o&&o.m(s,null),e=!0},p(t,[c]){o&&o.p&&(!e||c&1)&&V(o,a,t,t[0],e?G(a,t[0],c,null):B(t[0]),null)},i(t){e||(H(o,t),e=!0)},o(t){L(o,t),e=!1},d(t){t&&y(s),o&&o.d(t)}}}function K(n,s,e){let{$$slots:a={},$$scope:o}=s;return n.$$set=t=>{"$$scope"in t&&e(0,o=t.$$scope)},[o,a]}class Z extends T{constructor(s){super(),W(this,s,K,J,z,{})}}export{Z as default};
