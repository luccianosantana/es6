class Message {
  constructor(text = '', created = Date.now() ){
    this.text = text;
    this._created = created;
  }

  get created(){
    return this._created;
  }

  set created(created) {
    if(!created || isNaN(created)) {
      throw new Error('Invalid created');
    }
    this._created = created;
  }

  toString() {
    return  `Message created at: ${this._created} - Text: ${this.text}`;
  }

}

class ImageMessage extends Message {
  constructor(text= '', created = Date.now(), url='', thumbnail = '') {
    super(text,created);

    this.url = url;
    this.thumbnail = thumbnail;
  }

  toString() {
    return `Photo${super.toString()} ` +
           `- Url: ${this.url}` + 
           ` Thumbnail: ${this.thumbnail}`;
  }
}

var text = '';
var created = Date.now();

var duckTypeMessage = {
  text,
  created
};

console.log(duckTypeMessage);

var emptyMessage = new Message();
var textMessage = new Message('Yestyerday message', Date.now() - 86400);
var photoMessage = new ImageMessage('luciano',Date.now() - 8600,'http://www.banrisul.com.br/fav.ico','teste123');

console.log(String(emptyMessage));
console.log(String(textMessage));
console.log(String(photoMessage));

console.log(emptyMessage instanceof Message);
console.log(textMessage instanceof Message);
console.log(photoMessage instanceof Message);
console.log(photoMessage instanceof ImageMessage);
console.log(emptyMessage instanceof ImageMessage);
console.log(duckTypeMessage instanceof Message);