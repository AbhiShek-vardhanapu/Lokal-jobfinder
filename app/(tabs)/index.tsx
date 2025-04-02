import React, { useState, useEffect, useCallback } from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  RefreshControl,
  Button,
} from 'react-native';
import JobCard from '../../components/JobCard';
import { fetchJobs } from '../../utils/api';
import { useBookmarks } from '../../hooks/useBookmarks';

const PAGE_SIZE = 10;

const JobBoardScreen = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const { isBookmarked, toggleBookmark } = useBookmarks();

  const fetchJobData = useCallback(async (currentPage) => {
    try {
      const newJobs = await fetchJobs(currentPage, PAGE_SIZE);
      if (newJobs.length === 0 || newJobs.length < PAGE_SIZE) {
        setHasMore(false);
      }
      return newJobs;
    } catch (err) {
      setError(err.message || 'Failed to load jobs');
      throw err;
    }
  }, []);

  const loadJobs = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newJobs = await fetchJobData(page);
      setJobs((prevJobs) => [...prevJobs, ...newJobs]);
      setPage((prevPage) => prevPage + 1);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore, fetchJobData]);

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    setPage(1);
    setHasMore(true);
    try {
      const newJobs = await fetchJobData(1);
      setJobs(newJobs);
    } finally {
      setRefreshing(false);
    }
  }, [fetchJobData]);

  useEffect(() => {
    loadJobs();
  }, []);

  const handleEndReached = useCallback(() => {
    if (!loading && hasMore) {
      loadJobs();
    }
  }, [loading, hasMore, loadJobs]);

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <Button
          title="Retry"
          onPress={() => {
            setError(null);
            loadJobs();
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Latest Opportunities</Text>
      <FlatList
        data={jobs}
        keyExtractor={(item, index) => `job-${item.id}-${index}`}
        renderItem={({ item }) => (
          <JobCard
            job={item}
            isBookmarked={isBookmarked(item.id)}
            onBookmark={() => toggleBookmark(item)}
          />
        )}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading && hasMore ? (
            <ActivityIndicator
              size="large"
              color="#1A1A2E"
              style={styles.loader}
            />
          ) : null
        }
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={['#1A1A2E']}
            tintColor="#1A1A2E"
          />
        }
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A2E',
    margin: 16,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  loader: {
    marginVertical: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: '#E94560',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default JobBoardScreen;