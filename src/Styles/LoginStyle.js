import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../theme';

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    height: 360,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: spacing.xl,
    borderBottomRightRadius: spacing.xl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 380,
    height: 100,
    // borderRadius: 35,
    // backgroundColor: '#fff',
    marginBottom: 10,
  },
  logoText: {
    color: colors.surface,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
  },
  card: {
    marginHorizontal: spacing.lg,
    marginTop: -spacing.xxl * 3,
    padding: spacing.lg,
    borderRadius: spacing.md,
    backgroundColor: colors.surface,
    elevation: 5,
  },
  title: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.medium,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  label: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: spacing.sm,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: spacing.sm,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.lg,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
  },
  eye: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  
  forgotWrapper: {
    alignItems: 'flex-end',
    marginBottom: spacing.lg,
  },
  
  forgotText: {
    fontSize: typography.fontSize.sm,
    color: colors.primary,
    fontWeight: typography.fontWeight.medium,
  },
  
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: spacing.sm,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.surface,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.medium,
  },
});

// export const styles = StyleSheet.create({
//   safe: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//   },
//   header: {
//     height: 360,
//     backgroundColor: 'red',
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logoContainer: {
//     alignItems: 'center',
//   },
//   logo: {
//     width: 350,
//     height: 100,
//     // borderRadius: 35,
//     backgroundColor: '#fff',
//     marginBottom: 10,
//   },
//   logoText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   card: {
//     marginHorizontal: 20,
//     marginTop: -80,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 20,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: '600',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 13,
//     color: '#555',
//     marginBottom: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 15,
//   },
//   passwordWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#6b5cff',
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     marginBottom: 20,
//   },
//   passwordInput: {
//     flex: 1,
//     paddingVertical: 12,
//   },
//   eye: {
//     fontSize: 18,
//   },
//   button: {
//     backgroundColor: 'red',
//     paddingVertical: 14,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });
