const Block=require('./block.js');

// const block=new Block('foo','bar','zoo','baz');

// console.log("Hello world"+block.toString());
// console.log(Block.genesis().toString());

const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
console.log(fooBlock.toString());

