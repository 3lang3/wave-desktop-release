<script setup>
import { useRouter } from 'vitepress'
const { go } = useRouter()
</script>

<template>
  <div class="flex h-screen w-screen relative">
    <!-- <svg class="fixd inset-0 z-1 h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1512 745" preserveAspectRatio="xMidYMid" width="1512"
      height="745" xmlns:xlink="http://www.w3.org/1999/xlink"
      style="shape-rendering:auto;display:block;background-position-x:0%;background-position-y:0%;background-size:auto;background-origin:padding-box;background-clip:border-box;background:scroll rgb(255, 255, 255) none  repeat;width:1512px;height:745px;;animation:none">
      <g>
        <g transform="matrix(100,0,0,100,1734.5869140625,-338.48504638671875)" opacity="0.4"
          style="transform:matrix(100, 0, 0, 100, 1734.59, -338.485);opacity:0.4;;animation:none">
          <path
            d="M11.854080000000002 0 C11.854080000000002 2.4192 11.894552149860104 4.0738713431646865 10.684952149860104 6.16896 S8.022128656835315 9.056334418493039 5.927040000000002 10.265934418493039 S2.419200000000001 12.337920000000002 7.554797118068058e-16 12.337920000000002 S-3.831951343164684 11.47553441849304 -5.927039999999998 10.26593441849304 S-9.4753521498601 8.26404865683532 -10.6849521498601 6.1689600000000056 S-11.854080000000002 2.4192000000000013 -11.854080000000002 1.4517061128836658e-15 S-11.894552149860106 -4.073871343164683 -10.684952149860106 -6.168959999999998 S-8.022128656835319 -9.056334418493035 -5.927040000000006 -10.265934418493037 S-2.4192000000000022 -12.337920000000002 -2.266439135420417e-15 -12.337920000000002 S3.8319513431646777 -11.475534418493043 5.927039999999993 -10.265934418493044 S9.475352149860099 -8.26404865683532 10.6849521498601 -6.168960000000006 S11.854080000000002 -2.419200000000003 11.854080000000002 -2.9034122257673317e-15"
            fill="#0055ff" stroke-width="0" transform="matrix(1,0,0,1,0,0)"
            style="fill:rgb(0, 85, 255);transform:matrix(1, 0, 0, 1, 0, 0);;animation:none"></path>
        </g>
        <g transform="matrix(100,0,0,100,1930.3043212890625,-480.6820373535156)" opacity="0.4"
          style="transform:matrix(100, 0, 0, 100, 1930.3, -480.682);opacity:0.4;;animation:none">
          <path
            d="M14.224896000000001 0 C14.224896000000001 2.90304 14.273462579832126 4.888645611797624 12.821942579832125 7.402752 S9.62655438820238 10.867601302191646 7.112448000000002 12.319121302191647 S2.9030400000000007 14.805504000000003 9.06575654168167e-16 14.805504000000003 S-4.59834161179762 13.770641302191647 -7.112447999999997 12.319121302191649 S-11.370422579832121 9.916858388202382 -12.821942579832122 7.402752000000007 S-14.224896000000001 2.9030400000000016 -14.224896000000001 1.742047335460399e-15 S-14.273462579832126 -4.888645611797619 -12.821942579832127 -7.402751999999997 S-9.626554388202383 -10.867601302191641 -7.112448000000007 -12.319121302191643 S-2.9030400000000025 -14.805504000000003 -2.7197269625045003e-15 -14.805504000000003 S4.598341611797613 -13.77064130219165 7.112447999999991 -12.319121302191652 S11.37042257983212 -9.916858388202384 12.82194257983212 -7.4027520000000075 S14.224896000000001 -2.9030400000000034 14.224896000000001 -3.484094670920798e-15"
            fill="#0046ff" stroke-width="0" transform="matrix(1,0,0,1,0,0)"
            style="fill:rgb(0, 70, 255);transform:matrix(1, 0, 0, 1, 0, 0);;animation:none"></path>
        </g>
        <g transform="matrix(100,0,0,100,2400.026123046875,-821.9548950195312)" opacity="0.4"
          style="transform:matrix(100, 0, 0, 100, 2400.03, -821.955);opacity:0.4;;animation:none">
          <path
            d="M19.9148544 0 C19.9148544 4.064255999999999 19.982847611764974 6.844103856516673 17.950719611764974 10.3638528 S13.477176143483328 15.214641823068302 9.957427200000001 17.246769823068302 S4.064256 20.727705600000004 1.2692059158354336e-15 20.727705600000004 S-6.437678256516669 19.278897823068306 -9.957427199999996 17.246769823068306 S-15.91859161176497 13.883601743483336 -17.95071961176497 10.363852800000009 S-19.9148544 4.064256000000002 -19.9148544 2.4388662696445582e-15 S-19.982847611764974 -6.844103856516669 -17.950719611764978 -10.363852799999997 S-13.477176143483334 -15.214641823068296 -9.957427200000009 -17.2467698230683 S-4.064256000000003 -20.727705600000004 -3.807617747506301e-15 -20.727705600000004 S6.437678256516659 -19.27889782306831 9.957427199999987 -17.246769823068313 S15.918591611764965 -13.883601743483336 17.950719611764967 -10.36385280000001 S19.9148544 -4.064256000000004 19.9148544 -4.8777325392891164e-15"
            fill="#0033ff" stroke-width="0" transform="matrix(1,0,0,1,0,0)"
            style="fill:rgb(0, 51, 255);transform:matrix(1, 0, 0, 1, 0, 0);;animation:none"></path>
        </g>
        <g></g>
      </g>
    </svg> -->
    <svg class="fixd inset-0 z-1 h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin slice"
      viewBox="24 105 156 95">
      <rect x="0" y="0" width="300" height="300" fill="#E22227" />
      <path class="top-outer" fill="#EF8716" stroke="#371300" stroke-width="1"
        d="M68 1c23,0 67,17 69,39 4,38 5,52 -5,69 -20,36 -68,46 -120,-9 -27,-28 -7,-101 56,-99z" />
      <path class="top-inner" fill="#537571" stroke="#DCB467" stroke-width="1"
        d="M69 22c33,-7 52,21 54,37 3,26 -1,28 -8,40 -15,25 -48,25 -85,-14 -19,-20 -4,-53 39,-63z" />
      <path class="bottom-outer" fill="#DCB467" stroke="#371300" stroke-width="1"
        d="M158 158c30,13 56,50 44,75 -9,18 -22,46 -42,55 -20,10 -48,2 -73,-19 -29,-25 -27,-55 -9,-79 17,-22 43,-48 80,-32z" />
      <path class="bottom-inner" fill="#263D56" stroke="#537571" stroke-width="1"
        d="M136 180c32,-9 45,13 46,29 3,27 8,29 0,42 -14,25 -52,24 -79,0 -21,-18 -2,-61 33,-71z" />
    </svg>
    <div class="absolute inset-0 z-[2] bg-black/90"></div>
    <div class="absolute inset-0 z-[3] flex flex-col items-center justify-between text-white font-mono p-10">
      <div class="flex items-center justify-center ">
        <svg class="w-[90px]" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 424 110">
          <path fill="currentColor"
            d="m7 5h22l25 76 16-51 9 26-16 50h-21zm68 0h19l24 76 24-76h22l-37 101h-20zm111 0h25l40 101h-22l-30.2-83.2-27.8 83.2h-20zm53 0h20l36 101h-19zm75 0h21l-33 85-9-24zm33.7 0h68.6v19h-68.6zm3.3 42h61.8v17h-61.8zm-6 40h74v19h-74z" />
        </svg>
      </div>
      <div class="flex items-center flex-col mb-10 text-center">
        <div class="lg:text-7xl text-4xl font-medium mb-5">Made for Efficiency</div>
        <div class="lg:text-lg text-sm mb-10">简单易用的自动化桌面软件, 支持Win和MacOS</div>
        <div class="flex space-x-5">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScBh-MfmnxSHBu88vGkCISUUEOWL8_yvOpNQpxnyQ9d4ng1OQ/viewform"
            target="_blank"
            class="flex items-center justify-center rounded-xl text-md bg-[#4f40ff] !text-white font-bold px-5 py-3 cursor-pointer !no-underline hover:!text-white visited:text-white">
            付费加入</a>
          <div v-on:click="go('/install#安装包')"
            class="flex items-center justify-center rounded-xl text-md bg-transparent border-2 text-white font-bold px-5 py-3 cursor-pointer">
            软件下载</div>
          <div
            class="flex items-center justify-center rounded-xl text-md bg-transparent border-2 text-white font-bold px-5 py-3 cursor-pointer"
            v-on:click="go('/about')">
            使用文档</div>
        </div>
      </div>
      <div class="flex flex-col-reverse md:flex-row items-center justify-between uppercase w-full">
        <div class="flex items-center gap-2">made by
          <a href="https://twitter.com/0x3lang" target="_blank"
            class="hover:underline cursor-pointer underline-offset-4 !text-white hover:!text-white visited:text-white">0x3lang</a>
        </div>
        <div class="flex items-center">
          <a href="https://twitter.com/Wave_Tool" target="_blank"
            class="hover:underline cursor-pointer underline-offset-4 !text-white hover:!text-white visited:text-white">Wave_Tool</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.home-page-container {
  .VPHome {
    margin-bottom: 0
  }

  .container {
    padding: 0;
    max-width: 100%
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg)
  }
}

.top-outer {
  transform-origin: 73px 69px;
  animation: rotate 30s linear infinite;
}

.top-inner {
  transform-origin: 73px 69px;
  animation: rotate 20s linear infinite;
}

.bottom-outer {
  transform-origin: 134px 222px;
  animation: rotate 30s linear infinite;
}

.bottom-inner {
  transform-origin: 134px 222px;
  animation: rotate 20s linear infinite;
}
</style>
