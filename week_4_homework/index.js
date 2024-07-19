const body = document.body;

function el(tag, options) {
  if (options === undefined) {
    return document.createElement(tag);
  }

  const e = document.createElement(tag);

  for (const key in options) {
    e[key] = options[key];
  }

  return e;
}

function populateList(into, ...items) {
  for (const item of items) {
    const li = el('li');
    li.textContent = item;
    into.appendChild(li);
  }
}

function randColor() {
  const hexLetters = '0123456789abcdef';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexLetters[Math.floor(Math.random() * 16)];
  }

  return color;
}

const elements = {
  header: el('header', { textContent: 'hello' }),
  main: el('main', { textContent: 'there' }),
  footer: el('footer', { textContent: 'i have the low ground' }),
  lists: [
    el('ul', { style: 'margin-left: 3rem;' }),
    el('ul', { style: 'margin-left: 3rem;' }),
  ],
  h1: el('h1', { textContent: 'wow' }),
  h2: el('h2', { textContent: 'woah' }),
  p: el('p', {
    textContent: 'pay no attention to the man behind the curtain.',
  }),
  img: el('img', {
    src:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/31153d71-0e88-42c3-bc6d-59dd4387f66c/d9144g6-4c14c250-6656-4360-97c1-bc9173e0c95a.jpg/v1/fill/w_1600,h_1132,q_75,strp/magic_book_by_colgreyis_by_chabien_d9144g6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEzMiIsInBhdGgiOiJcL2ZcLzMxMTUzZDcxLTBlODgtNDJjMy1iYzZkLTU5ZGQ0Mzg3ZjY2Y1wvZDkxNDRnNi00YzE0YzI1MC02NjU2LTQzNjAtOTdjMS1iYzkxNzNlMGM5NWEuanBnIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.nXsjnOYi_zLZax0g8i3FGz0w2B_Y6gfSm_I77dbgo4A',
    width: 256,
    style: 'display: block;',
  }),
  links: [
    el('a', { href: 'https://google.com/', textContent: 'Yahoo!' }),
    el('a', { href: 'https://yahoo.com/', textContent: 'Google' }),
  ],
};

const {
  header: a,
  main: b,
  footer: c,
  lists: d,
  h1: e,
  h2: f,
  p: g,
  img: h,
  links: i,
} = elements;

body.append(a, b, c);
b.append(e, f, ...d, g, h, ...i);

populateList(d[0], 'something', 'or', 'another');
populateList(d[1], 'now', 'or', 'never');

document.querySelectorAll('*').forEach((e) => {
  e.style.padding = '0.5rem';
  if (e.tagName.toLowerCase() !== 'ul') {
    e.style.margin = '0.5rem';
  }
  e.style.backgroundColor = randColor();
  e.style.textShadow = 'black 1px 1px 1px';
  e.style.fontFamily = 'sans-serif';
  e.style.borderRadius = '0.5rem';
  e.style.textDecoration = 'none';
});
