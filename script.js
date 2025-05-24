document.addEventListener("DOMContentLoaded", function () {
  // Get the main image element
  const mainImage = document.querySelector(".wrapper img");
  //   Get radio inputs for accordion
  const accordionInputs = document.querySelectorAll(".accordion-toggle");

  //  Update image
  function updateImage() {
    // Get current checked accordion item
    const checkedInput = document.querySelector(".accordion-toggle:checked");

    if (checkedInput) {
      // Get parent accordion item
      const accordionItem = checkedInput.closest(".accordion-item");
      //   Get the image path from the data attribute from html
      const newImageSrc = accordionItem.getAttribute("data-open-image");

      // Update the main iamge source
      if (newImageSrc && mainImage) {
        mainImage.src = newImageSrc;

        // Update alt text to match the accordion title
        const accordionTitle = accordionItem.querySelector(
          ".accordion-item-title"
        ).textContent;
        mainImage.alt = accordionTitle;
      }
    }
  }
  //   Add event listeners to each accordion input
  accordionInputs.forEach((input) => {
    input.addEventListener("change", updateImage);
  });

  //   Initialize with the default checked item (item1 is checked by default)
  updateImage();
});
