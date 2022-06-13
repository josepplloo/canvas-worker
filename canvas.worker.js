// Copyright 2022 jose.garcia
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function getGradientColor(percent, canvas) {
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, 'red');
  gradient.addColorStop(1, 'blue');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  const imgd = ctx.getImageData(0, 0, ctx.canvas.width, 1);
  const colors = imgd.data.slice(percent * 4, percent * 4 + 4);
  return `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]})`;
}
self.onmessage = function (evt) {
  console.log(evt.data.canvas);
  getGradientColor(40, evt.data.canvas);
}