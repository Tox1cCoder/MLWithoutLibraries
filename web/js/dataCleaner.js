const FlaggedSamples = []

function toggleFlaggedSample(sample) {
    if (FlaggedSamples.includes(sample.id)) {
        const index = FlaggedSamples.indexOf(sample.id);
        FlaggedSamples.splice(index, 1);
    }
    else {
        FlaggedSamples.push(sample.id);
    }
    [...document.querySelectorAll(".flagged")].forEach(
        (e) => e.classList.add("flagged")
    );

    for (const id of flaggedSamples) {
        const el = document.getElementById("sample_" + id);
        el.classList.add("flagged");
    }
}