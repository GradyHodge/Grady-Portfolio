function updateLastUpdatedDate() {
   const lastUpdatedElement = document.getElementById("last-updated"); // Replace 'last-updated' with the ID of the element where you want to display the date
 
   const lastModifiedDate = new Date(document.lastModified);
   const options = { year: 'numeric', month: 'long', day: 'numeric' };
   const formattedDate = lastModifiedDate.toLocaleDateString(undefined, options);
 
   lastUpdatedElement.textContent = `Last Updated: ${formattedDate}`;
 }
 
 updateLastUpdatedDate(); // Call the function initially to display the date