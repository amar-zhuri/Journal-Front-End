document.getElementById('save-btn').addEventListener('click', function() {
    var entry = document.getElementById('journal-entry').value.trim();
    if (entry !== '') {
      var currentDate = new Date();
      var timestamp = currentDate.toLocaleString();
      var entryItem = '<li class="entry-item"><p>' + entry + '</p><small>' + timestamp + '</small></li>';
      document.getElementById('past-entries-list').innerHTML += entryItem;
      saveEntryToLocal(entry, timestamp);
      showConfirmation('Entry saved successfully!');
    } else {
      alert('Please write something before saving.');
    }
  });
  
  document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('journal-entry').value = '';
  });
  
  document.getElementById('clear-all-btn').addEventListener('click', function() {
    clearAllEntries();
  });
  
  function saveEntryToLocal(entry, timestamp) {
    var pastEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    pastEntries.push({ entry: entry, timestamp: timestamp });
    localStorage.setItem('journalEntries', JSON.stringify(pastEntries));
  }
  
  function loadPastEntries() {
    var pastEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    pastEntries.forEach(function(item) {
      var entryItem = '<li class="entry-item"><p>' + item.entry + '</p><small>' + item.timestamp + '</small></li>';
      document.getElementById('past-entries-list').innerHTML += entryItem;
    });
  }
  
  function clearAllEntries() {
    localStorage.removeItem('journalEntries');
    document.getElementById('past-entries-list').innerHTML = '';
    showConfirmation('All entries cleared successfully!');
  }
  
  function showConfirmation(message) {
    var confirmationText = document.getElementById('confirmation-text');
    confirmationText.textContent = message;
    var confirmationBox = document.querySelector('.confirmation');
    confirmationBox.style.opacity = 1;
    setTimeout(function() {
      confirmationBox.style.opacity = 0;
    }, 2000);
  }


  
  
  window.onload = loadPastEntries;
  
  
  document.addEventListener('DOMContentLoaded', function() {
    var questionMark = document.getElementById('question-mark');
    var moodChanges = document.getElementById('mood-changes');

    
    function toggleMoodChanges() {
        if (moodChanges.style.display === 'block') {
            moodChanges.style.display = 'none';
        } else {
            moodChanges.style.display = 'block';
        }
    }

    
    questionMark.addEventListener('click', function() {
        toggleMoodChanges();
    });
});
