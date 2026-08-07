# Follow Mode video

**Status: done.** The walkthrough is hosted on YouTube and already wired into
core module 1, in both languages:

    https://youtu.be/HDWga8ZROik      video id: HDWga8ZROik

The card renders as a lightweight thumbnail that opens YouTube in a new tab —
no heavy embed, so the page stays fast. Nothing needs to be stored in this
folder.

---

## Changing the video later

Find the video card in core module 1 of `assets/content-en.js` and
`assets/content-es.js` and swap the id:

```js
{ type: 'video', h: 'Follow Mode in action', p: '…', yt: 'NEW_VIDEO_ID' },
```

The id is the part after `youtu.be/` or after `watch?v=` in the URL.

Keep the video **Unlisted** rather than Private — Private videos are not
viewable by tutors, and the thumbnail will not load either.

---

## Self-hosting instead (optional)

If you ever want the file served from this repo rather than YouTube, replace
`yt` with `src` and drop an MP4 here:

```js
{ type: 'video', h: '…', p: '…', src: 'video/follow-mode.mp4',
  poster: 'images/tutor-notes-1.png' },
```

`.mov` is not a reliable web format, so convert first — this also cuts the size
dramatically (a 168 MB screen recording usually lands between 8 and 25 MB):

```bash
ffmpeg -i following_mode.mov \
  -vf "scale='min(1280,iw)':-2" \
  -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p \
  -c:a aac -b:a 96k -movflags +faststart \
  video/follow-mode.mp4
```

`-crf 26` is the quality/size dial (lower = better and bigger), and
`-movflags +faststart` lets playback begin before the file finishes
downloading. Note that GitHub blocks pushes of files over 100 MB.
