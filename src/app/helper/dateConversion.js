
export function dateConverion(date){
    const dateObj = new Date(date);
    // Format the date to "21. Dec. 2024"
    const formattedDate = dateObj.toLocaleDateString("en-GB", {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).replace(",", ".");
    
    return formattedDate
}


