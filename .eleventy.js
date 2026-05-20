module.exports = function(eleventyConfigFile) {
  
  // Menyalin folder assets (CSS/JS/Gambar) langsung ke output tanpa diproses
  eleventyConfigFile.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};