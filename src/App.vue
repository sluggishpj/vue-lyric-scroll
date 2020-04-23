<template>
  <div id="app">
    <div class="audio-wrapper">
      <audio
        controls
        class="music-player"
        ref="audio"
        :src="musicSrc"
        :loop="true"
        @timeupdate="timeupdate"
      ></audio>
    </div>

    <div class="lyric">
      <LyricScroll
        :lyric="lyric"
        :t-lyric="tLyric"
        :lyric-active-class="'lyric-active'"
        :lyric-center-class="'lyric-center'"
        triangle-width="14px"
        triangle-color="#fff"
        center-line-color="#fff"
        center-time-color="#fff"
        :current-time="currentTime"
        @change-current-time="handleChangeCurrentTime"
      />
    </div>
  </div>
</template>

<script>
import LyricScroll from './components/lyric-scroll'

export default {
  name: 'app',
  components: {
    LyricScroll
  },
  data: () => ({
    // 歌曲地址
    musicSrc:
      'https://f000.backblazeb2.com/file/j-assets/wispering+-+%E5%A4%A9%E3%83%8E%E5%BC%B1+piano+ver.mp3',
    // 原始歌词
    originLyric: '',
    // 原始译词
    originTLyric: '',
    // 当前播放时间
    currentTime: 0
  }),
  computed: {
    // 原词，格式为{xx: 歌词, ...}，xx为该词开始时间
    lyric() {
      return this.lyricToObj(this.originLyric)
    },
    // 译词，格式同原词
    tLyric() {
      return this.lyricToObj(this.originTLyric)
    }
  },
  methods: {
    // 将00:00.00转换为秒数
    timeStrToNum(str) {
      const minute = Number(str.slice(0, 2))
      const second = Number(str.slice(3, 5))
      const minSec = Number(str.slice(6, 8))
      return minute * 60 + second + minSec / 100
    },
    // 将歌词字符串转换为对象，格式为{开始时间: 歌词, ...}
    lyricToObj(lyricStr) {
      const obj = {}
      let perLyric
      let time
      lyricStr.split('\n').forEach((item, idx) => {
        perLyric = item.slice(item.indexOf(']') + 1)
        if (perLyric) {
          time = this.timeStrToNum(item.slice(1, 9))
          obj[time] = perLyric
        }
      })
      return obj
    },
    // 更新播放时间
    timeupdate() {
      this.changeCurrentTime(this.$refs.audio.currentTime)
    },

    changeCurrentTime(newTime) {
      this.currentTime = newTime
    },

    handleChangeCurrentTime(time) {
      this.$refs.audio.currentTime = time
    }
  },
  mounted() {
    this.originLyric =
      '[by:秋锋客]\n[00:15.460]仆がずっと前から思ってる事を话そうか\n[00:22.250]友达に戻れたらこれ以上はもう望まないさ\n[00:29.020]君がそれでいいなら仆だってそれで构わないさ\n[00:36.010]嘘つきの仆が吐いた はんたいことばの爱のうた\n[00:47.360]\n[00:56.820]今日はこっちの地方はどしゃぶりの晴天でした\n[01:03.690]昨日もずっと暇で一日満喫してました\n[01:10.560]别に君のことなんて考えてなんかいないさ\n[01:17.530]いやでもちょっと本当は考えてたかもなんて\n[01:24.510]メリーゴーランドみたいに\n[01:29.240]仆の头ん中はもうグルグルさ\n[01:34.760]\n[01:35.310]この両手から零れそうなほど\n[01:42.130]君に贳った爱はどこに舍てよう\n[01:48.990]限りのある消耗品なんて仆は\n[02:00.040]要らないよ\n[02:03.230]\n[02:03.620]仆がずっと前から思ってる事を话そうか\n[02:10.240]姿は见えないのに言叶だけ见えちゃってるんだ\n[02:17.220]仆が知らないことがあるだけで気が狂いそうだ\n[02:24.060]ぶら下がった感情が 绮丽なのか汚いのか\n[02:30.780]\n[02:31.370]仆にはまだわからず舍てる宛てもないんだ\n[02:44.870]言叶の裏の裏が见えるまで待つからさ\n[02:51.760]待つくらいならいいじゃないか\n[02:58.030]\n[02:58.530]进む君と止まった仆の\n[03:05.300]缩まらない隙を何で埋めよう\n[03:12.020]まだ素直に言叶に出来ない仆は\n[03:23.480]天性の弱虫さ\n[03:25.920]\n[03:26.320]この両手から零れそうなほど\n[03:33.090]君に渡す爱を谁に譲ろう\n[03:39.760]そんなんどこにも宛てがあるわけないだろ\n[03:51.020]まだ待つよ\n[03:58.680]\n[03:59.930]もういいかい/\n[04:12.620]\n'
    this.originTLyric =
      '[by:青菜茄茄酱]\n[00:15.460]我来告诉你我一直以来所想的事吧\n[00:22.250]能回到朋友关系的话我就别无所求了\n[00:29.020]如果你无所谓的话那我也没关系\n[00:36.010]骗子的我所吐出的　相反词的情歌\n[00:56.820]今日附近地区是倾盆大雨的大晴天\n[01:03.690]昨天也是一整天都很闲的充实一天\n[01:10.560]我又没有在想你的事情\n[01:17.530]不对 其实搞不好有想那麽一点点\n[01:24.510]像旋转木马那样旋转\n[01:29.240]我的脑袋也转啊转的\n[01:35.310]几乎要自两手中洒出的\n[01:42.130]你所给的爱要扔到哪好？\n[01:48.990]这种有限的消耗品\n[02:00.040]我可不要\n[02:03.620]我来告诉你我一直以来所想的事吧\n[02:10.240]明明看不到身影却只能看见词语\n[02:17.220]只要有我所不知道的事情就几乎要疯掉\n[02:24.060]唾手可得的感情　是干净还是肮脏\n[02:31.370]我还不知道　也没地方可丢弃\n[02:44.870]我会等到能够看到言语的反面的反面那时\n[02:51.760]如果只是等待的话那也不错啊\n[02:58.530]前进的你与停步的我\n[03:05.300]不会缩短的缝隙该填什麽进去？\n[03:12.020]仍然无法直率的说出口的我\n[03:23.480]是天生的胆小鬼\n[03:26.320]几乎要自两手中洒出的\n[03:33.090]交给你的爱要让给谁好？\n[03:39.760]我看根本没人可让吧\n[03:51.020]还在等待\n[03:59.930]可以了吗\n'
  }
}
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;
  font-size: 16px;
  display: grid;
  grid-template-rows: 100px calc(100vh - 120px);
  justify-content: center;
  background-color: #64363c;
  margin: 0 auto;
}

.audio-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lyric {
  width: 100%;
  color: #adaaa8;
  box-sizing: border-box;
  border: 1px dashed #ccc;
  box-sizing: border-box;
  text-align: center;
}
.lyric-active {
  // 需要最高级，否则可能被内部的.center-lyric覆盖
  color: #fff !important;
}
.lyric-center {
  color: #fff;
}
</style>
