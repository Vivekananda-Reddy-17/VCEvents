const event = require("../../models/event");

let scheduleIndex =  1 ;
  document.getElementById('addSchedule').addEventListener('click', () => {
    const container = document.getElementById('scheduleItems');
    const div = document.createElement('div');
    div.classList.add('row', 'g-2', 'mb-2', 'schedule-item');
    div.innerHTML = `
      <div class="col-md-4">
        <input type="text" name="event[schedule][${scheduleIndex}][time]" class="form-control" placeholder="Time (e.g. 10:00 AM)" required />
      </div>
      <div class="col-md-8">
        <input type="text" name="event[schedule][${scheduleIndex}][activity]" class="form-control" placeholder="Activity description" required />
      </div>
    `;
    container.appendChild(div);
    scheduleIndex++;
  });

  let speakerIndex = 1;
  document.getElementById('addSpeaker').addEventListener('click', () => {
    const container = document.getElementById('speakersList');
    const div = document.createElement('div');
    div.classList.add('speaker-item', 'border', 'rounded', 'p-3', 'mb-3');
    div.innerHTML = `
      <div class="mb-2">
        <input type="text" name="event[speakers][${speakerIndex}][name]" class="form-control" placeholder="Speaker Name" required />
      </div>
      <div class="mb-2">
        <input type="url" name="event[speakers][${speakerIndex}][photo]" class="form-control" placeholder="Photo URL" />
      </div>
      <div class="mb-2">
        <textarea name="event[speakers][${speakerIndex}][bio]" class="form-control" placeholder="Short bio"></textarea>
      </div>
      <div class="row g-2">
        <div class="col-md-6">
          <input type="url" name="event[speakers][${speakerIndex}][social][twitter]" class="form-control" placeholder="Twitter URL" />
        </div>
        <div class="col-md-6">
          <input type="url" name="event[speakers][${speakerIndex}][social][linkedin]" class="form-control" placeholder="LinkedIn URL" />
        </div>
      </div>
    `;
    container.appendChild(div);
    speakerIndex++;
  });

  let faqIndex = 1;
  document.getElementById('addFaq').addEventListener('click', () => {
    const container = document.getElementById('faqsList');
    const div = document.createElement('div');
    div.classList.add('faq-item', 'mb-3');
    div.innerHTML = `
      <input type="text" name="event[faqs][${faqIndex}][question]" class="form-control mb-2" placeholder="FAQ Question" required />
      <textarea name="event[faqs][${faqIndex}][answer]" class="form-control" placeholder="FAQ Answer" required></textarea>
    `;
    container.appendChild(div);
    faqIndex++;
  });
  
  document.getElementById("arrow-btn").addEventListener('click', () => {
    this.classList.toggle('show');
  })