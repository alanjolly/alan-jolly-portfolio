export const projectsData = [
    {
        id: 1,
        title: "Wazuh Security",
        highlight: "Monitoring Dashboard",
        icon: "FaShieldAlt",
        description: "Deployed Wazuh SIEM solution with custom dashboards for real-time security monitoring across enterprise networks. Integrated with existing infrastructure to provide comprehensive threat detection and response capabilities.",
        tags: ["SIEM", "Security Monitoring", "Threat Detection"],
        technologies: ["Wazuh", "Elasticsearch", "Kibana", "Linux"] // Keeping for modal details if needed
    },
    {
        id: 2,
        title: "GNS3 IDS",
        highlight: "Implementation",
        icon: "FaNetworkWired",
        description: "Successfully deployed an Intrusion Detection System (IDS) using GNS3 simulation software.",
        tags: ["Network Security", "IDS", "GNS3"],
        technologies: ["GNS3", "Snort", "Wireshark", "Cisco IOS"]
    },
    {
        id: 3,
        title: "FlightAware PiAware",
        highlight: "ADS-B Ground Station",
        icon: "FaLaptop",
        description: "Successfully built and deployed my own ADS-B ground station using FlightAware PiAware. Now, I can track aircraft in real time and contribute valuable flight data to the aviation community.",
        tags: ["ADS-B", "Aviation", "Raspberry Pi"],
        technologies: ["Raspberry Pi", "Linux", "SDR", "Python"]
    },
    {
        id: 4,
        title: "NOAA19 Satellite",
        highlight: "Tracking System",
        icon: "FaCloud",
        description: "Successfully implemented live tracking of NOAA19 Satellite with Gpredict and data analysis. Captured and processed satellite signals at 137.100 MHz, demonstrating the power of open-source tools in Earth observation.",
        tags: ["Satellite", "Data Analysis", "Radio"],
        technologies: ["SDR", "Gpredict", "Python", "Signal Processing"]
    }
];

export const categories = ["All", "Network Security", "Threat Detection", "Infrastructure", "Compliance", "Social Engineering"];
