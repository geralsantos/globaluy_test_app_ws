SERVICE BACKGROUND IN SYSTEMD.SERVICE
- /etc/systemd/system/redgps_ws.service
comandos después de definir el service
# systemctl daemon-reload
# systemctl enable redgps_ws.service
# systemctl start redgps_ws.service
# systemctl restart redgps_ws.service