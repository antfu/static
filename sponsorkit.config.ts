import { BadgePreset, defineConfig, tierPresets as presets } from 'sponsorkit'
import fs from 'fs/promises'

const VERCEL_LOGO = (width: number, y: number) => `
<a xlink:href="https://vercel.com" class="sponsorkit-link" target="_blank" id="Vercel">
  <svg width="307" height="82" viewBox="0 0 307 82" x="${(width - 307) / 2}" y="${y}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="307" height="82" rx="6" fill="black"/>
  <path d="M82.8 67L52.9 15L23 67H82.8ZM112.957 64.6328L137.945 17.3637H127.137L109.9 51.6921L92.6628 17.3637H81.8545L106.842 64.6328H112.957ZM283.248 17.3637V64.6329H274.3V17.3637H283.248ZM233.44 46.99C233.44 43.3062 234.209 40.0661 235.747 37.2699C237.285 34.4737 239.429 32.321 242.179 30.812C244.928 29.3029 248.144 28.5484 251.826 28.5484C255.088 28.5484 258.024 29.2585 260.634 30.6788C263.243 32.0991 265.317 34.2074 266.855 37.0036C268.393 39.7998 269.185 43.2174 269.232 47.2564V49.3202H242.878C243.064 52.2496 243.926 54.5576 245.464 56.2442C247.049 57.8864 249.169 58.7075 251.826 58.7075C253.503 58.7075 255.041 58.2637 256.439 57.376C257.837 56.4883 258.886 55.2899 259.585 53.7808L268.743 54.4466C267.624 57.7754 265.527 60.4385 262.451 62.4358C259.375 64.4331 255.833 65.4317 251.826 65.4317C248.144 65.4317 244.928 64.6772 242.179 63.1681C239.429 61.6591 237.285 59.5064 235.747 56.7102C234.209 53.914 233.44 50.6739 233.44 46.99ZM260.004 43.6612C259.678 40.7762 258.769 38.668 257.278 37.3365C255.787 35.9606 253.969 35.2726 251.826 35.2726C249.356 35.2726 247.352 36.0049 245.814 37.4696C244.276 38.9343 243.32 40.9982 242.948 43.6612H260.004ZM218.345 37.3365C219.836 38.5348 220.768 40.1993 221.141 42.3297L230.369 41.8637C230.042 39.1562 229.087 36.8039 227.503 34.8066C225.918 32.8093 223.867 31.278 221.351 30.2128C218.881 29.1032 216.155 28.5484 213.172 28.5484C209.49 28.5484 206.275 29.3029 203.525 30.812C200.775 32.321 198.632 34.4737 197.094 37.2699C195.556 40.0661 194.787 43.3062 194.787 46.99C194.787 50.6739 195.556 53.914 197.094 56.7102C198.632 59.5064 200.775 61.6591 203.525 63.1681C206.275 64.6772 209.49 65.4317 213.172 65.4317C216.248 65.4317 219.044 64.8769 221.561 63.7673C224.077 62.6133 226.128 60.9933 227.712 58.9072C229.297 56.8212 230.252 54.38 230.578 51.5838L221.281 51.1844C220.955 53.5367 220.046 55.3565 218.555 56.6436C217.063 57.8864 215.269 58.5078 213.172 58.5078C210.283 58.5078 208.046 57.5091 206.461 55.5118C204.877 53.5145 204.084 50.6739 204.084 46.99C204.084 43.3062 204.877 40.4656 206.461 38.4683C208.046 36.471 210.283 35.4723 213.172 35.4723C215.176 35.4723 216.9 36.0937 218.345 37.3365ZM172.953 29.3457H181.279L181.52 36.1369C182.111 34.2146 182.933 32.7218 183.986 31.6585C185.512 30.1166 187.64 29.3457 190.369 29.3457H193.769V36.6146H190.3C188.357 36.6146 186.761 36.8789 185.512 37.4075C184.309 37.9362 183.384 38.7732 182.737 39.9186C182.135 41.064 181.835 42.5178 181.835 44.2799V64.6328H172.953V29.3457ZM134.546 37.2699C133.008 40.0661 132.239 43.3062 132.239 46.99C132.239 50.6739 133.008 53.914 134.546 56.7102C136.084 59.5064 138.227 61.6591 140.977 63.1681C143.727 64.6772 146.942 65.4317 150.624 65.4317C154.632 65.4317 158.174 64.4331 161.25 62.4358C164.325 60.4385 166.423 57.7754 167.541 54.4466L158.383 53.7808C157.684 55.2899 156.636 56.4883 155.238 57.376C153.84 58.2637 152.302 58.7075 150.624 58.7075C147.968 58.7075 145.847 57.8864 144.263 56.2442C142.725 54.5576 141.863 52.2496 141.676 49.3202H168.03V47.2564C167.984 43.2174 167.192 39.7998 165.654 37.0036C164.116 34.2074 162.042 32.0991 159.432 30.6788C156.822 29.2585 153.886 28.5484 150.624 28.5484C146.942 28.5484 143.727 29.3029 140.977 30.812C138.227 32.321 136.084 34.4737 134.546 37.2699ZM156.077 37.3365C157.568 38.668 158.477 40.7762 158.803 43.6612H141.746C142.119 40.9982 143.074 38.9343 144.612 37.4696C146.15 36.0049 148.154 35.2726 150.624 35.2726C152.768 35.2726 154.585 35.9606 156.077 37.3365Z" fill="white"/>
  </svg>
</a>
`

const past: BadgePreset = {
  avatar: {
    size: 20,
  },
  boxWidth: 22,
  boxHeight: 22,
  container: {
    sidePadding: 35,
  },
}

export default defineConfig({
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: past,
    },
    {
      title: 'Backers',
      preset: presets.small,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 10,
      preset: {
        avatar: {
          size: 42,
        },
        boxWidth: 52,
        boxHeight: 52,
        container: {
          sidePadding: 30,
        },
      },
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 50,
      preset: presets.medium,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 100,
      preset: presets.large,
    },
    {
      title: 'Platinum Sponsors',
      monthlyDollars: 500,
      preset: presets.xl,
    },
    {
      title: 'Special Sponsor',
      monthlyDollars: Infinity,
      composeAfter(compose, _, config) {
        if (config.filter?.({ monthlyDollars: Infinity } as any, []) !== false) {
          compose
            .addSpan(20)
            .addText('Special Sponsor', 'sponsorkit-tier-title')
            .addSpan(10)
            .addRaw(VERCEL_LOGO(config.width!, compose.height))
            .addSpan(130)
        }
      },
    },
  ],


  replaceLinks: {
    'https://opencollective.com/logto': 'https://logto.io/?ref=antfu'
  },

  sponsorsAutoMerge: true,

  mergeSponsors: [
    [
      { login: 'patak-dev', provider: 'github' },
      { login: 'patak', provider: 'opencollective' },
    ],
    [
      { login: 'serkodev', provider: 'github' },
      { login: 'serko', provider: 'opencollective' },
    ],
    [
      { login: 'WebWorkerTech', provider: 'github' },
      { login: 'web-worker-podcast', provider: 'opencollective' },
    ],
    [
      { login: 'kissu', provider: 'github' },
      { login: 'kissu', provider: 'opencollective' },
    ],
  ],

  async onSponsorsReady(sponsors) {
    await fs.writeFile(
      'sponsors.json',
      JSON.stringify(
        sponsors
          .filter((i) => i.privacyLevel !== 'PRIVATE')
          .map((i) => {
            return {
              name: i.sponsor.name,
              login: i.sponsor.login,
              avatar: i.sponsor.avatarUrl,
              amount: i.monthlyDollars,
              link: i.sponsor.linkUrl || i.sponsor.websiteUrl,
              org: i.sponsor.type === 'Organization'
            }
          })
          .sort((a, b) => b.amount - a.amount),
        null,
        2
      )
    )
  },

  onSponsorsAllFetched(sponsors) {
    sponsors.unshift({
      monthlyDollars: 2000,
      privacyLevel: 'PUBLIC',
      sponsor: {
        name: 'Vercel',
        login: 'vercel',
        linkUrl: 'https://vercel.com',
        avatarUrl: 'https://avatars.githubusercontent.com/u/14985020?s=200&v=4',
        type: 'Organization',
      },
    })
    return sponsors
  },

  outputDir: '.',
  formats: ['svg', 'png'],

  renders: [
    {
      name: 'sponsors',
      width: 800,
      filter: sponsor => sponsor.sponsor?.login !== 'vercel',
    },
    {
      name: 'sponsors.wide',
      width: 1800,
      filter: sponsor => sponsor.sponsor?.login !== 'vercel',
    },
    {
      name: 'sponsors.part1',
      width: 800,
      filter: (sponsor) => sponsor.monthlyDollars >= 9.9 && sponsor.sponsor?.login !== 'vercel'
    },
    {
      name: 'sponsors.part2',
      width: 800,
      filter: (sponsor) => sponsor.monthlyDollars < 9.9 && sponsor.monthlyDollars >= 0
    },
    {
      name: 'sponsors.past',
      width: 800,
      filter: (sponsor) => sponsor.monthlyDollars < 0
    },
    {
      name: 'sponsors.circles',
      width: 1000,
      includePastSponsors: true,
      renderer: 'circles',
      circles: {
        radiusPast: 3
      }
    }
  ]
})
