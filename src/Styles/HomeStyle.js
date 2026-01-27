import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },

  header: {
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top:-10
  },

  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    top:-10
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: '#fff',
  },

  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  role: {
    color: '#FFECEC',
    fontSize: 13,
    marginTop: 4,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 23,
    borderWidth: 2,
    borderColor: '#fff',
  },

  card: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 18,
    padding: 16,
    elevation: 3,
    marginTop: -25
  },

  date: {
    fontSize: 15,
    fontWeight: '600',
  },

  shift: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },

  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },

  timeBox: {
    alignItems: 'center',
    flex: 1,
  },

  timeValue: {
    fontSize: 14,
    fontWeight: '700',
  },

  timeLabel: {
    fontSize: 11,
    color: '#777',
    marginTop: 4,
  },

  checkInBtn: {
    backgroundColor: '#E53935',
    paddingVertical: 14,
    borderRadius: 14,
    marginTop: 8,
  },

  checkInText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    letterSpacing: 1,
  },

  zoneText: {
    color: '#2E7D32',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },

  actionsRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },

  actionCard: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    elevation: 2,
  },

  actionText: {
    fontWeight: '600',
  },

  announcementHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 10,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
  },

  viewAll: {
    color: '#E53935',
    fontSize: 13,
  },

  announcementTitle: {
    fontWeight: '700',
    marginBottom: 6,
  },

  announcementText: {
    fontSize: 13,
    color: '#555',
  },

  announcementDate: {
    fontSize: 11,
    color: '#999',
    marginTop: 10,
    textAlign: 'right',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 14,
    marginHorizontal: 6,
    borderLeftWidth: 4,

    // Android
    elevation: 4,

    // iOS
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },

  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  statValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
  },

  statTitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },

  statSub: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
})
