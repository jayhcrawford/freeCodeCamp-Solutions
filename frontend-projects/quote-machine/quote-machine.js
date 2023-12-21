let quotes = [
    ["The world is a wonderful place, full of variety", "David Hockney"],
    ["In the midst of chaos, there is also opportunity", "Sun Tzu"],
    ["To obtain better results than the others, you must do something different than the others", "Sir John Templeton"],
    ["Take up one idea. Make that idea your life. Think of it, dream it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.", "Swami Vivekananda"],
    ["At first dreams seem impossible, then improbable, then inevitable.", "Christopher Reeve"],
    ["Make no small plans for they have no power to stir the soul", "Niccolo Machiavelli"],
    ["History shows us that the people who end up changing the world -- the great political, social, scientific, technological, artistic, even sports revolutionaries -- are always nuts, until they are right, and then they are geniuses.", "John Eliot"],
    ["All great changes are preceded by chaos", "Deepak Chopra"],
    ["Man's mind, once stretched to a new idea, never regains its original dimensions", "Oliver Wendell Holmes"],
    ["You're braver than you believe, and stronger than you seem, and smarter than you think", "A.A. Milne"],
    ["Life is either a daring adventure, or it is nothing", "Helen Keller"],
    ["Argue for your limitations and sure enough, they're yours", "Richard Bach"],
    ["Greatest success comes just one step beyond the point at which defeat overtakes you.", "Unknown"],
    ["Success is not built on success. It's built on failure. It's built on frustration, Sometimes it's built on catastrophe.", "Sumner Redstone"]
]

function myQuote() {
    let randomNum = Math.round(Math.random(1) * quotes.length);
    document.getElementById('text').innerHTML = quotes[randomNum][0];
    document.getElementById('author').innerHTML = quotes[randomNum][1];
}

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));