## Exam flow validation

### Start screen
- Confirm exam instructions and duration are visible before starting.
- Prevent accidental multiple starts from repeated clicks.

### Attempt
- Check unanswered questions, answer changes, and navigation between questions.
- Ensure a refresh or navigation event does not silently claim that an attempt was submitted.

### Submission
- Show a clear confirmation before final submission.
- Distinguish answered, unanswered, and submitted states in the result summary.