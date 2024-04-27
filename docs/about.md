<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/3lang3.png',
    name: '0x3lang',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/3lang3' },
      { icon: 'twitter', link: 'https://twitter.com/0x3lang' }
    ]
  },
  // {
  //   avatar: 'https://pbs.twimg.com/profile_images/1771570783682527232/ddwOXA7E_400x400.jpg',
  //   name: '0xFeng',
  //   title: 'COO',
  //   links: [
  //     { icon: 'twitter', link: 'https://twitter.com/0x0xFeng' }
  //   ]
  // }
]
</script>

# Wave 是什么?

Wave 是专为快速、批量执行自动化脚本而设计的桌面软件, 同时兼具简单易用的特点, 支持`Win`和`MacOS`。

<img src="/icon.png" width="120px" />

## Wave 社群

- [钉钉群](https://t.me/wave_automation) - todo
- [Telegram](https://t.me/wave_automation) - todo
- [Twitter](https://twitter.com/0x3lang) - todo
- [Discord](https://discord.gg/3lang3) - todo
- [Github](https://github.con/3lang3)

## Wave 团队

<VPTeamMembers size="small" :members="members" />
