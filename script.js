document.addEventListener('DOMContentLoaded', function () {
	var loginForm = document.getElementById('loginForm');
	if (loginForm) {
		loginForm.addEventListener('submit', function (e) {
			e.preventDefault();
			var email = document.getElementById('email').value;
			var password = document.getElementById('password').value;
			var role = document.getElementById('role').value;

			// Here you would typically send this data to a server for authentication
			console.log('Login attempt:', { email: email, password: password, role: role });

			// For demo purposes, we'll just redirect based on the role
			if (role === 'elderly') {
				window.location.href = 'elderly_dashboard.html';
			} else if (role === 'caregiver') {
				window.location.href = 'caregiver_dashboard.html';
			} else if (role === 'medical') {
				window.location.href = 'medicalprofessional_dashboard.html';
			} else {
				alert('Please select a role');
			}
		});
	}

	// Emergency button
	var emergencyButton = document.getElementById('emergencyButton');
	if (emergencyButton) {
		emergencyButton.addEventListener('click', function () {
			alert('Emergency services have been notified. Help is on the way.');
			// Here you would typically trigger an actual emergency notification
		});
	}

	// Simulate updating health stats (for demo purposes)
	function updateHealthStats() {
		var heartRate = document.getElementById('heartRate');
		var bloodPressure = document.getElementById('bloodPressure');
		var steps = document.getElementById('steps');

		if (heartRate && bloodPressure && steps) {
			setInterval(function () {
				heartRate.textContent = Math.floor(Math.random() * (80 - 60) + 60) + ' bpm';
				bloodPressure.textContent = Math.floor(Math.random() * (130 - 110) + 110) + '/' + Math.floor(Math.random() * (85 - 70) + 70) + ' mmHg';
				steps.textContent = Math.floor(Math.random() * (5000 - 2000) + 2000);
			}, 5000); // Update every 5 seconds
		}
	}

	updateHealthStats();

	// Simulate adding new alerts (for demo purposes)
	function addRandomAlert() {
		var alertList = document.getElementById('alertList');
		if (alertList) {
			var alerts = [
				{ type: 'critical', message: 'Unusual heart rate detected' },
				{ type: 'warning', message: 'Medication reminder: Take evening pills' },
				{ type: 'info', message: 'Weekly check-up scheduled for tomorrow' },
			];

			setInterval(function () {
				var randomAlert = alerts[Math.floor(Math.random() * alerts.length)];
				var li = document.createElement('li');
				li.className = 'alert ' + randomAlert.type;
				li.textContent = randomAlert.message;
				alertList.prepend(li);

				// Remove the oldest alert if there are more than 5
				if (alertList.children.length > 5) {
					alertList.removeChild(alertList.lastChild);
				}
			}, 10000); // Add a new alert every 10 seconds
		}
	}

	addRandomAlert();

	// Function to open the care plan dialog
	window.openCarePlanDialog = function (patientName) {
		const dialog = document.getElementById('carePlanDialog');
		document.getElementById('dialogPatientName').textContent = patientName;

		// Preloading default data for demo
		document.getElementById('mealPlanInput').value = 'Default meal plan';
		document.getElementById('exerciseInput').value = 'Default exercise routine';
		document.getElementById('medicationInput').value = 'Default medication schedule';

		dialog.hidden = false;

		document.getElementById('carePlanForm').onsubmit = function (e) {
			e.preventDefault();
			alert('Care plan updated for ' + patientName);
			dialog.hidden = true;
		};
	};

	// Function to open the log entry dialog
	window.openLogEntry = function () {
		const logDialog = document.getElementById('logEntryDialog');
		logDialog.hidden = false;

		document.getElementById('logEntryForm').onsubmit = function (e) {
			e.preventDefault();
			alert('Log entry submitted: ' + document.getElementById('logEntryText').value);
			logDialog.hidden = true;
			document.getElementById('logEntryText').value = ''; // Clear the input
		};
	};

	// Functions to view reports (Medical Professional Dashboard)
	window.viewReport = function (patientName) {
		document.getElementById('reportPatientName').innerText = patientName;
		document.getElementById('reportDetails').innerText = 'Report details for ' + patientName + ' go here.';
		document.getElementById('reportDialog').hidden = false;
	};

	// Function to close report dialog
	window.closeReportDialog = function () {
		document.getElementById('reportDialog').hidden = true;
	};

	window.manageMedications = function () {
		document.getElementById('medicationDialog').hidden = false;
		document.getElementById('medicationForm').reset(); // Reset the form
	};

	document.getElementById('medicationForm').onsubmit = function (e) {
		e.preventDefault();
		var medicationName = document.getElementById('medicationName').value;
		var dosage = document.getElementById('dosage').value;

		var li = document.createElement('li');
		li.textContent = `${medicationName} - ${dosage}`;
		document.getElementById('medicationList').appendChild(li);

		document.getElementById('medicationDialog').hidden = true;
	};

	// Schedule Appointment
	window.scheduleAppointment = function () {
		document.getElementById('appointmentDialog').hidden = false;
		document.getElementById('appointmentForm').reset(); // Reset the form
	};

	document.getElementById('appointmentForm').onsubmit = function (e) {
		e.preventDefault();
		var patientName = document.getElementById('appointmentPatient').value;
		var appointmentDate = document.getElementById('appointmentDate').value;

		var li = document.createElement('li');
		li.textContent = `${patientName} - Appointment on ${appointmentDate}`;
		document.getElementById('appointmentList').appendChild(li);

		document.getElementById('appointmentDialog').hidden = true;
	};

	// View Patient Profile
	window.viewPatientProfile = function (patientName) {
		document.getElementById('profilePatientName').textContent = patientName;
		document.getElementById('patientMedicalHistory').textContent = `Medical history for ${patientName} goes here...`;
		document.getElementById('patientProfileDialog').hidden = false;
	};

	// Close Patient Profile
	window.closePatientProfile = function () {
		document.getElementById('patientProfileDialog').hidden = true;
	};

	// Initialize health stats update
	updateHealthStats();

	// Initialize random alerts
	addRandomAlert();
});
